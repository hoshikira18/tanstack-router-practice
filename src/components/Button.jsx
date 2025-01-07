import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ component, children, className, ...props }) => {
    const Component = component || "button";

    return (
        <Component
            className={twMerge(
                "inline-block px-4 py-2 bg-indigo-600 rounded-md text-white active:translate-y-0.5 transition-all duration-100",
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
