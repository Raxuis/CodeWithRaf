import React, {ReactNode} from 'react';
import {cn} from "@/lib/utils";

interface CalloutProps {
    children?: ReactNode;
    type?: "default" | "danger" | "warning";
}

export function Callout({children, type = "default", ...props}: CalloutProps) {
    return (
        <div className={cn('my-6 items-start rounded-md border border-l-4 px-4 py-2 w-full dark:max-w-none',
            {
                'border-red-900 bg-red-50 dark:prose': type === "danger",
                'border-yellow-900 bg-yellow-50 dark:prose': type === "warning",
            }
        )}
             {...props}
        >
            <div>{children}</div>
        </div>
    )
}