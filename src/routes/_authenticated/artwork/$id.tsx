import { createFileRoute } from "@tanstack/react-router";
import { getArtWorks } from "../../api/artwork";

export const Route = createFileRoute("/_authenticated/artwork/$id")({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    return <div>Hello "/artworks/{id}"!</div>;
}
