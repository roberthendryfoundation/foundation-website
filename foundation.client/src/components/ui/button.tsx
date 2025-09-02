import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";



const buttonVariants = cva(
    // NEW base: rounder corners, ring offset, smoother transitions, subtle press
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium " +
    "transition-[background,box-shadow,transform,color] active:translate-y-px " +
    "disabled:pointer-events-none disabled:opacity-50 " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 " +
    "outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 " +
    "aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/40 dark:focus-visible:ring-destructive/50 dark:bg-destructive/60",
                outline:
                    // slightly different look (more card-like), but same meaning
                    "border border-input bg-background/80 text-foreground hover:bg-accent/50 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost:
                    "hover:bg-accent/60 hover:text-accent-foreground dark:hover:bg-accent/40",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                // nudge sizes (more roomy defaults)
                default: "h-10 px-5 py-2 has-[>svg]:px-4",
                sm: "h-9 rounded-lg gap-1.5 px-3.5 has-[>svg]:px-3",
                lg: "h-11 rounded-xl px-6 has-[>svg]:px-5",
                icon: "size-10 rounded-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);
function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}

export { Button, buttonVariants };
