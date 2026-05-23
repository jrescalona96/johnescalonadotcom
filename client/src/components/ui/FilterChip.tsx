import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const filterChipVariants = cva(
  "rounded-full border px-4 py-1.5 font-body text-sm leading-snug transition-all duration-150 cursor-pointer",
  {
    variants: {
      active: {
        true: "border-foreground bg-foreground text-surface",
        false: "border-border bg-transparent text-muted hover:border-accent-soft hover:text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

type FilterChipProps = VariantProps<typeof filterChipVariants> & {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function FilterChip({ className, active, children, onClick }: FilterChipProps) {
  return (
    <button
      className={cn(filterChipVariants({ active }), className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
