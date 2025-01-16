import { CloseSquare } from "iconsax-react";
import { type ReactNode, cloneElement, createContext, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

type ChildrenProps = {
    children: ReactNode;
    className?: string;
};

type ModalContentProps = {
    children: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
};

type Context = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

// step1: create context
const ModalContext = createContext<Context>({
    isOpen: false,
    open: () => {},
    close: () => {},
});

const Modal = ({ children }: ChildrenProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
            }}
        >
            <div>{children}</div>
        </ModalContext.Provider>
    );
};

type TriggerProps = {
    children: React.ReactNode;
};

const Trigger = ({ children }: TriggerProps) => {
    const { open } = useContext(ModalContext);

    const handleOpen = () => {
        open();
    };

    return cloneElement(children as React.ReactElement, {
        onClick: handleOpen,
    });
};

const Content = ({ children }: ModalContentProps) => {
    const { isOpen, close } = useContext(ModalContext);
    if (!isOpen) return null;

    return (
        <div
            className={twMerge(
                "bg-transparent fixed inset-0 flex items-center justify-center p-5 overflow-hidden",
            )}
        >
            <div className="relative w-full max-w-screen-sm max-h-[90vh] overflow-auto bg-white p-5 shadow-lg rounded-md">
                {children}
                <button type="button" onClick={close} className="absolute top-2 right-2">
                    <CloseSquare size="32" color="#6366f1" />
                </button>
            </div>
        </div>
    );
};

Modal.Trigger = Trigger;
Modal.Content = Content;

export default Modal;
