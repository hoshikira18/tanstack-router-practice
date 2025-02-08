import { Button } from "@mantine/core";
import { Link, Outlet } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

const activeProps = {
    style: {
        fontWeight: 500,
        color: "red",
    },
};

const MainLayout = () => {
    const { signIn, signOut } = useAuth();
    return (
        <div className="space-y-3 p-10">
            <p className="text-xl">Navigations</p>
            <div className="space-x-3">
                <Link to="/search" activeProps={activeProps}>
                    Search
                </Link>
                <Link to="/artwork" activeProps={activeProps}>
                    Artwork
                </Link>
            </div>
            <div className="space-x-2">
                <Button onClick={signIn}>Sign In</Button>
                <Button onClick={signOut}>Sign Out</Button>
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;
