import { createFileRoute } from "@tanstack/react-router";
import { getArtWorks } from "../../api/artwork";

export const Route = createFileRoute("/artwork/$id")({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    return <div>Hello "/artworks/{id}"!</div>;
}
