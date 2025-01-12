import { nprogress } from "@mantine/nprogress";
import { Link, useLoaderData } from "react-router-dom";
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
];

const Home = () => {
    return (
        <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
                <Button key={item.href} component={Link} to={item.href}>
                    {index + 1}. {item.label}
                </Button>
            ))}
            <Button>Click</Button>
        </div>
    );
};

export default Home;
