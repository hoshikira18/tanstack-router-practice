import { useLoaderData } from "react-router-dom";

interface DataType {
    id: number;
    artist_display: string;
}

const LoaderPractice = () => {
    const data = useLoaderData();
    return (
        <div className="space-y-5">
            {data.map((e: DataType) => {
                return <div key={e.id}>{e.artist_display}</div>;
            })}
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

export default LoaderPractice;
