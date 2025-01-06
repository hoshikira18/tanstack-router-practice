import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={"p-10"}>
            <Outlet />
        </div>
    );
};

export default Layout;
