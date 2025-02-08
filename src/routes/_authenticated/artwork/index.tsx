import { createFileRoute } from "@tanstack/react-router";
import { getArtWorks } from "../../../api/artwork";

export const Route = createFileRoute("/_authenticated/artwork/")({
    component: RouteComponent,
    loader: async () => await getArtWorks(),
});

function RouteComponent() {
    const artworks = Route.useLoaderData();
    return (
        <div>
            {artworks?.map(
                (artwork: {
                    id?: number;
                    artist_title?: string;
                }) => {
                    return <div key={artwork.id}>{artwork?.artist_title}</div>;
                },
            )}
        </div>
    );
}
