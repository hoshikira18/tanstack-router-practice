import { createFileRoute } from "@tanstack/react-router";
import { getArtWorks } from "../../api/artwork";

export const Route = createFileRoute("/artwork/")({
    component: RouteComponent,
    loader: async () => await getArtWorks(),
});

function RouteComponent() {
    const artwork = Route.useLoaderData();
    console.log(artwork);
    return <div>Hello "/artwork/"!</div>;
}
