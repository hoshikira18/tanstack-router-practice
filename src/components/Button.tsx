import type { ComponentPropsWithRef, ElementType, JSXElementConstructor } from "react";
import { twMerge } from "tailwind-merge";

type IntrinsicAttributes<E extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>> =
    JSX.LibraryManagedAttributes<E, ComponentPropsWithRef<E>>;

export interface ButtonOwnProps<E extends ElementType = ElementType> {
    component?: E;
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<IntrinsicAttributes<E>, keyof ButtonOwnProps>;

const Button = <E extends ElementType = "button">({
    component,
    children,
    className,
    ...props
}: ButtonProps<E>) => {
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
tton;
