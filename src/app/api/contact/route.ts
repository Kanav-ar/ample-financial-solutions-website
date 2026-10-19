import { getContactRateLimiter } from "@/lib/rate-limit";
import { Resend } from "resend";

const SERVICE_LABELS = {
  "bank-finance": "Credit & Banking Advisory",
  "ibc-nclt": "IBC & NCLT Consultancy",
  "capital-markets": "Capital Markets & Fundraising",
  taxation: "Direct & Indirect Taxation",
  compliance: "Compliance & Regulatory Advisory",
  general: "General Enquiry",
} as const;

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function jsonMessage(message: string, status: number) {
  return Response.json({ message }, { status });
}

function getClientIp(request: Request): string | null {
  const headers = request.headers;

  // Vercel deployment
  if (process.env.VERCEL) {
    const ip =
      headers.get("x-vercel-forwarded-for") ?? headers.get("x-forwarded-for");

    return ip?.split(",")[0]?.trim() || null;
  }

  // Netlify deployment
  const netlifyIp = headers.get("x-nf-client-connection-ip");

  if (netlifyIp) {
    return netlifyIp.trim();
  }

  // Local development only
  if (process.env.NODE_ENV !== "production") {
    return "local-development";
  }

  return null;
}

export async function POST(request: Request) {
  const contentLength = request.headers.get("content-length");

  if (contentLength && Number(contentLength) > 12_000) {
    return jsonMessage("The submitted form is too large.", 413);
  }

  let payload: unknown;

  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!upstashUrl || !upstashToken) {
    console.error("Upstash Redis environment variables are missing.");

    return Response.json(
      { message: "The contact service is temporarily unavailable." },
      { status: 503 },
    );
  }

  const clientIp = getClientIp(request);

  if (!clientIp) {
    console.error("Could not determine the client IP for rate limiting.");

    return Response.json(
      { message: "The contact service is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const { success, reset } = await getContactRateLimiter().limit(clientIp);

    if (!success) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((reset - Date.now()) / 1000),
      );

      return Response.json(
        {
          message:
            "Too many requests. Please wait a few minutes before submitting another enquiry.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSeconds),
          },
        },
      );
    }
  } catch (error) {
    // Preserve enquiries during a temporary Redis connection failure.
    console.error("Contact rate-limit check failed:", error);
  }

  try {
    payload = await request.json();
  } catch {
    return jsonMessage("Invalid request. Please try again.", 400);
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    Array.isArray(payload)
  ) {
    return jsonMessage("Invalid form data.", 400);
  }

  const data = payload as Record<string, unknown>;

  // Honeypot: quietly ignore obvious automated submissions.
  if (getString(data.website)) {
    return Response.json({
      message: "Thank you for contacting Ample Financial Solutions.",
    });
  }

  const name = getString(data.name);
  const email = getString(data.email).toLowerCase();
  const company = getString(data.company);
  const phone = getString(data.phone);
  const service = getString(data.service);
  const message = getString(data.message);
  const introduction = getString(data.introduction);
  const privacyConsent = data.privacyConsent === true;

  if (name.length < 2 || name.length > 100) {
    return jsonMessage("Please enter a valid name.", 400);
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonMessage("Please enter a valid email address.", 400);
  }

  if (company.length > 120 || phone.length > 30) {
    return jsonMessage("One of the submitted fields is too long.", 400);
  }

  if (message.length < 10 || message.length > 3000) {
    return jsonMessage(
      "Please provide a message between 10 and 3000 characters.",
      400,
    );
  }

  if (introduction.length > 1000) {
    return jsonMessage("Introduction must be 1000 characters or fewer.", 400);
  }

  if (!privacyConsent) {
    return jsonMessage("Please acknowledge the information-use notice.", 400);
  }

  if (!Object.prototype.hasOwnProperty.call(SERVICE_LABELS, service)) {
    return jsonMessage("Please select a valid service.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM;

  if (!apiKey || !contactTo || !contactFrom) {
    console.error("Contact email environment variables are missing.");

    return jsonMessage(
      "The enquiry service is temporarily unavailable. Please try again later.",
      503,
    );
  }

  const serviceLabel = SERVICE_LABELS[service as keyof typeof SERVICE_LABELS];

  // Escape visitor-controlled values before inserting them into HTML.
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, "<br>");

  const safeService = escapeHtml(serviceLabel);
  const receivedAt = new Date().toUTCString();

  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Website Enquiry</title>
      </head>

      <body style="margin:0;padding:0;background-color:#f3f5f8;font-family:Arial,Helvetica,sans-serif;color:#172b42;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f5f8;padding:32px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">

                <tr>
                  <td style="background-color:#172b42;padding:28px 32px;">
                    <p style="margin:0 0 8px;color:#e3c797;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">
                      Ample Financial Solutions
                    </p>
                    <h1 style="margin:0;color:#ffffff;font-size:25px;line-height:1.35;font-weight:bold;">
                      New Website Enquiry
                    </h1>
                    <p style="margin:10px 0 0;color:#d1dbe6;font-size:14px;line-height:1.7;">
                      A visitor has submitted an enquiry through your website.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:28px 32px 12px;">
                    <p style="margin:0 0 8px;color:#64748b;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">
                      Service requested
                    </p>
                    <span style="display:inline-block;background-color:#f3eee4;border:1px solid #e6d7bc;border-radius:6px;padding:9px 12px;color:#79592c;font-size:13px;font-weight:bold;">
                      ${safeService}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style="padding:16px 32px 8px;">
                    <h2 style="margin:0 0 16px;color:#172b42;font-size:17px;">
                      Contact details
                    </h2>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:14px;line-height:1.6;">
                      <tr>
                        <td width="120" valign="top" style="padding:10px 8px 10px 0;color:#64748b;border-bottom:1px solid #edf0f4;">
                          Full name
                        </td>
                        <td valign="top" style="padding:10px 0;color:#172b42;font-weight:bold;border-bottom:1px solid #edf0f4;overflow-wrap:anywhere;">
                          ${safeName}
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:10px 8px 10px 0;color:#64748b;border-bottom:1px solid #edf0f4;">
                          Email address
                        </td>
                        <td valign="top" style="padding:10px 0;border-bottom:1px solid #edf0f4;overflow-wrap:anywhere;">
                          <a href="mailto:${safeEmail}" style="color:#8d6935;text-decoration:underline;">
                            ${safeEmail}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:10px 8px 10px 0;color:#64748b;border-bottom:1px solid #edf0f4;">
                          Company
                        </td>
                        <td valign="top" style="padding:10px 0;color:#172b42;border-bottom:1px solid #edf0f4;overflow-wrap:anywhere;">
                          ${safeCompany}
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:10px 8px 10px 0;color:#64748b;">
                          Phone
                        </td>
                        <td valign="top" style="padding:10px 0;color:#172b42;overflow-wrap:anywhere;">
                          ${safePhone}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 32px 28px;">
                    <h2 style="margin:0 0 12px;color:#172b42;font-size:17px;">
                      Enquiry message
                    </h2>

                    <div style="padding:18px;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#334155;font-size:14px;line-height:1.8;overflow-wrap:anywhere;">
                      ${safeMessage}
                    </div>

                    <p style="margin:20px 0 0;font-size:14px;line-height:1.7;">
                      <a href="mailto:${safeEmail}" style="display:inline-block;background-color:#172b42;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 18px;border-radius:6px;">
                        Reply to Enquirer
                      </a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 32px;">
                    <p style="margin:0;color:#64748b;font-size:11px;line-height:1.7;">
                      This notification was generated by the Ample Financial Solutions website contact form.
                      Received: ${escapeHtml(receivedAt)}.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const text = [
    "AMPLE FINANCIAL SOLUTIONS",
    "NEW WEBSITE ENQUIRY",
    "",
    `Service: ${serviceLabel}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "ENQUIRY MESSAGE",
    message,
    "",
    `Received: ${receivedAt}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: `New Enquiry | ${serviceLabel}`,
      html,
      text,
    });

    if (error) {
      console.error("Email provider rejected the enquiry:", error);

      return jsonMessage(
        "We could not send your enquiry right now. Please try again later.",
        502,
      );
    }

    return Response.json({
      message:
        "Your enquiry has been submitted successfully. Thank you for contacting Ample Financial Solutions.",
    });
  } catch (error) {
    console.error("Unexpected contact email error:", error);

    return jsonMessage(
      "We could not process your enquiry right now. Please try again later.",
      500,
    );
  }
}
