import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex field-sizing-content min-h-28 w-full rounded-xl border border-input bg-input-background " +
                "px-4 py-3 text-base md:text-sm outline-none resize-none transition-[border,box-shadow,color] " +
                "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 " +
                "dark:bg-input/30",
                "[&.with-counter]:pr-14",

                // focus & invalid 
                "focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 ring-offset-background " +
                "focus-visible:border-transparent " +
                "aria-invalid:border-destructive aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/50",
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
