import { nprogress } from "@mantine/nprogress";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

const Loading = () => {
    const { status } = useRouterState();
    useEffect(() => {
        if (status === "pending") {
            nprogress.start();
        } else {
            nprogress.complete();
        }
    }, [status]);
    return <></>;
};

export default Loading;
