"use client";

import { ContactFormData, ContactFormSchema } from "@/schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Typography } from "@/components/ui/typography";
import { ButtonWithSpinner } from "@/components/ui/button-with-spinner";
import { HugeiconsIcon } from "@hugeicons/react";
import { SentIcon } from "@hugeicons/core-free-icons";
import { toast } from "sonner";
import Link from "next/link";
import { Urls } from "@/constants/urls";
import { APIHandler } from "@/lib/api-handler";
import { ApiEndpoints } from "@/constants/api-endpoints";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    disabled: isSubmitting,
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const result = await APIHandler.execute({
        endPoint: ApiEndpoints.ContactForm,
        method: "POST",
        body: data,
        cache: "no-cache",
      });

      if (result instanceof Error) {
        toast.error("Failed to send message. Please try again.");
        return;
      }

      if (result.error) {
        toast.error(
          result.error || "Failed to send message. Please try again.",
        );
      } else {
        toast.success("Message sent successfully!");
        form.reset();
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 min-[896px]:space-y-6"
    >
      <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel required htmlFor="name">
                Name
              </FieldLabel>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Name"
                autoComplete="name"
                autoFocus
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel required htmlFor="email">
                Email
              </FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Email"
                autoComplete="email"
                type="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="col-span-full">
              <FieldLabel htmlFor="message" required>
                Message
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id="message"
                  placeholder="Share your ideas, ask a question, or just say hi! 👋"
                  rows={6}
                  className="min-h-24 resize-none"
                  aria-invalid={fieldState.invalid}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {field.value.length}/3000 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Typography className="text-xs sm:text-xs">
        By submitting this form, I agree to the{" "}
        <Link
          href={Urls.Privacy}
          className="hover:text-foreground decoration-foreground/40 underline underline-offset-4 transition-colors"
        >
          privacy policy
        </Link>
        .
      </Typography>
      <ButtonWithSpinner
        type="submit"
        isLoading={isSubmitting}
        loadingText="Sending..."
        className="w-full"
      >
        Send Message
        <HugeiconsIcon icon={SentIcon} />
      </ButtonWithSpinner>
    </form>
  );
};
