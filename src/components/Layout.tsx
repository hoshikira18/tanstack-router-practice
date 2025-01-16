import { nprogress } from "@mantine/nprogress";
import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    useEffect(() => {
        if (isLoading) {
            nprogress.start();
        } else {
            nprogress.complete();
        }
    }, [isLoading]);

    return (
        <div className={"bg-gray-200 h-screen p-10"}>
            <Outlet />
        </div>
    );
};

export default Layout;
