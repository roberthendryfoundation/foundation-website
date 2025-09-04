import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-10 w-full min-w-0 rounded-xl border border-input bg-input-background " +
                "px-4 py-2 text-base md:text-sm outline-none transition-[border,box-shadow,color] " +
                "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground " +
                "disabled:cursor-not-allowed disabled:opacity-50 file:inline-flex file:h-7 file:border-0 " +
                "file:bg-transparent file:text-sm file:font-medium file:text-foreground dark:bg-input/30",
                "[&.has-leading-icon]:ps-10 [&.has-trailing-icon]:pe-10",

                // focus & invalid
                "focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 ring-offset-background " +
                "focus-visible:border-transparent " +
                "aria-invalid:border-destructive",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
