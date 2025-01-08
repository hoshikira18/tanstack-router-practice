import { twMerge } from "tailwind-merge";

type PolymorphicPropsFactory<T extends React.ElementType, P> = {
    component?: T;
    children?: React.ReactNode;
    className?: string;
} & React.RefAttributes<T> &
    P;

type PolymorphicProps<
    T extends React.ElementType,
    FallbackPropsType,
> = T extends React.FunctionComponent<infer P>
    ? PolymorphicPropsFactory<T, P>
    : T extends string
      ? PolymorphicPropsFactory<T, React.HTMLAttributes<T>>
      : PolymorphicPropsFactory<T, FallbackPropsType>;

type ButtonProps<T extends React.ElementType = "button"> = PolymorphicProps<
    T,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export default function Button<T extends React.ElementType>({
    component,
    children,
    className,
    ...props
}: ButtonProps<T>): JSX.Element {
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
}
