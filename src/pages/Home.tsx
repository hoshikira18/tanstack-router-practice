import { Link } from "react-router-dom";
import Button from "../components/Button";

const menuItems = [
    {
        label: "useReducer hook",
        href: "/use-reducer",
    },
    {
        label: "Redux",
        href: "/redux",
    },
    {
        label: "Loader practice",
        href: "/loader",
    },
    {
        label: "Action practice",
        href: "/action",
    },
    {
        label: "React Query",
        href: "/react-query",
    },
    {
        label: "React Hook Form",
        href: "/react-hook-form",
    },
    {
        label: "Compount Component Practice",
        href: "/compound-components",
    },
];

const Home = () => {
    return (
        <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
                <Button key={item.href} component={Link} to={item.href}>
                    {index + 1}. {item.label}
                </Button>
            ))}
        </div>
    );
};

export default Home;
