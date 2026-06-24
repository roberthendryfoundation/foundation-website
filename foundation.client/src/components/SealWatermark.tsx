import type { ReactNode } from "react";
import { cn } from "./ui/utils";

interface SealWatermarkProps {
  children: ReactNode;
  className?: string;
}

export function SealWatermark({ children, className }: SealWatermarkProps) {
  return <section className={cn("seal-watermark", className)}>{children}</section>;
}
