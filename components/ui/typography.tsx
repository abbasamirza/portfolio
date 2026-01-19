import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/utils";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-serif text-2xl font-semibold tracking-tight sm:text-3xl",
      h2: "font-serif text-xl font-semibold tracking-tight sm:text-2xl",
      h3: "font-serif text-lg font-semibold tracking-tight sm:text-xl",
      h4: "font-serif text-base font-semibold tracking-tight sm:text-lg",
      p: "text-muted-foreground text-sm leading-relaxed sm:text-base",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type Variant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const variantElementMap: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
};

export type Props<T extends ElementType = "p"> = {
  as?: T;
  variant?: Variant;
} & ComponentProps<T>;

export const Typography = <T extends ElementType = "p">({
  variant = "p",
  className,
  as,
  ...props
}: Props<T>) => {
  const Component = (as ||
    variantElementMap[variant as Variant]) as ElementType;

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};
