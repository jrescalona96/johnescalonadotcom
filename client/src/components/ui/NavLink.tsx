import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Link, type LinkProps } from "react-router-dom";

const navLinkVariants = cva(
  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-150",
  {
    variants: {
      active: {
        true: "text-accent",
        false: "text-foreground hover:bg-border",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

type NavLinkProps = LinkProps & VariantProps<typeof navLinkVariants>;

export function NavLink({ className, active, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(navLinkVariants({ active }), className)}
      {...props}
    />
  );
}
