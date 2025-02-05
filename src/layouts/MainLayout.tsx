import { Link, Outlet } from "@tanstack/react-router";

const links = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Profiles",
        link: "/profiles",
    },
];

const MainLayout = () => {
    return (
        <div>
            <ul className="flex space-x-5">
                {links.map((linkItem) => {
                    return (
                        <li key={linkItem.link}>
                            <Link
                                to={linkItem.link}
                                activeProps={{
                                    style: {
                                        color: "blue",
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                {linkItem.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Outlet />
        </div>
    );
};

export default MainLayout;
