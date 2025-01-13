import { nprogress } from "@mantine/nprogress";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ReactQueryPractice = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["data"],
        queryFn: getData,
    });

    useEffect(() => {
        if (isLoading) {
            nprogress.start();
        } else {
            nprogress.complete();
        }
    }, [isLoading]);

    return (
        <div>
            {data?.map((e: { id: number; artist_display: string }) => {
                return <div key={e.id}>{e.artist_display}</div>;
            })}
        </div>
    );
};

const getData = () => {
    const data = fetch("https://api.artic.edu/api/v1/artworks", {
        method: "GET",
    })
        .then((res) => res.json())
        .then(({ data }) => {
            return data;
        })
        .catch(() => {
            throw new Error("Failed fetching data!");
        });
    return data;
};

export default ReactQueryPractice;
