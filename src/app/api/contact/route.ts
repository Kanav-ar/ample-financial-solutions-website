import { Resend } from "resend";

const SERVICE_LABELS = {
  "bank-finance": "Credit & Banking Advisory",
  "ibc-nclt": "IBC & NCLT Consultancy",
  "capital-markets": "Capital Markets & Fundraising",
  taxation: "Direct & Indirect Taxation",
  general: "General Enquiry",
} as const;

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function jsonMessage(message: string, status: number) {
  return Response.json({ message }, { status });
}

export async function POST(request: Request) {
  // Protect against unnecessarily large request bodies.
  const contentLength = request.headers.get("content-length");

  if (contentLength && Number(contentLength) > 12_000) {
    return jsonMessage("The submitted form is too large.", 413);
  }

  let payload: unknown;

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

  const formData = payload as Record<string, unknown>;

  // Honeypot: genuine visitors leave this field empty.
  if (getString(formData.website)) {
    return Response.json({
      message: "Thank you for contacting Ample Financial Solutions.",
    });
  }

  const name = getString(formData.name);
  const email = getString(formData.email).toLowerCase();
  const company = getString(formData.company);
  const phone = getString(formData.phone);
  const service = getString(formData.service);
  const message = getString(formData.message);
  const privacyConsent = formData.privacyConsent === true;

  // Validate required fields on the server.
  if (name.length < 2 || name.length > 100) {
    return jsonMessage("Please enter a valid name.", 400);
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
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

  if (!privacyConsent) {
    return jsonMessage(
      "Please acknowledge the information-use notice.",
      400,
    );
  }

  if (
    !Object.prototype.hasOwnProperty.call(SERVICE_LABELS, service)
  ) {
    return jsonMessage("Please select a valid service.", 400);
  }

  // Read secrets only on the server.
  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM;

  if (!apiKey || !contactTo || !contactFrom) {
    console.error("Contact form email environment variables are missing.");

    return jsonMessage(
      "The enquiry service is temporarily unavailable. Please try again later.",
      503,
    );
  }

  const serviceLabel =
    SERVICE_LABELS[service as keyof typeof SERVICE_LABELS];

  const emailText = [
    "New enquiry from the Ample Financial Solutions website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${serviceLabel}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: `Website enquiry: ${serviceLabel}`,
      text: emailText,
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