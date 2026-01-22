import z from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must be at most 100 characters long"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  message: z
    .string()
    .min(3, "Message must be at least 3 characters long")
    .max(3000, "Message must be at most 3000 characters long"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
