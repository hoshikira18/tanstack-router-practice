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
];

const Home = () => {
    const data = useLoaderData();

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

export const loader = async () => {
    const data = await fetch("https://api.artic.edu/api/v1/artworks", {
        method: "GET",
    })
        .then((res) => res.json())
        .then(({ data }) => data)
        .catch(() => {
            throw new Error("Failed fetching data!");
        });
    return data;
};

export default Home;
