import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../shared/classname-utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 rounded-content border px-6 py-3 font-body text-sm font-medium leading-none transition-all duration-150 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "border-accent bg-accent text-white hover:opacity-88",
        secondary:
          "border-border bg-surface text-foreground hover:border-muted",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
} & (
    | ({ as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export function Button({
  className,
  variant,
  as,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant }), className);

  if (as === "a") {
    const { ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a className={classes} {...anchorProps} />;
  }

  const { ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classes} {...buttonProps} />;
}
