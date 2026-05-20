import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

type ToastProps = {
  message: string;
  show: boolean;
  duration?: number;
  onHide?: () => void;
};

export function Toast({ message, show, duration = 3000, onHide }: ToastProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (show) {
      timerRef.current = setTimeout(() => {
        onHide?.();
      }, duration);
      return () => clearTimeout(timerRef.current);
    }
  }, [show, duration, onHide]);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-200 rounded-content bg-foreground px-6 py-3 text-[14px] text-surface pointer-events-none transition-all duration-300",
        show
          ? "translate-x-[-50%] translate-y-0 opacity-100"
          : "translate-x-[-50%] translate-y-20 opacity-0"
      )}
    >
      {message}
    </div>
  );
}
