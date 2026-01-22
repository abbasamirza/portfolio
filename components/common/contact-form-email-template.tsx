import { ContactFormData } from "@/schemas/contact-schema";

export function ContactFormEmailTemplate({
  name,
  email,
  message,
}: ContactFormData) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>You&apos;ve received a new message from your portfolio.</p>
      <div style={{ marginTop: "20px" }}>
        <h2>From</h2>
        <p>{name}</p>
        <h2>Email</h2>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <h2>Message</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
  );
}
