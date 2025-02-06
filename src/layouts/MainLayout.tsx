import { Link, Outlet } from "@tanstack/react-router";

const MainLayout = () => {
    return (
        <div>
            <Link to="/search">Search</Link>
            <Outlet />
        </div>
    );
};

export default MainLayout;
