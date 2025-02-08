import { createFileRoute, redirect } from "@tanstack/react-router";
import { getArtWorks } from "../../../api/artwork";

export const Route = createFileRoute("/_authenticated/artwork/")({
    component: RouteComponent,
    loader: async () => await getArtWorks(),
});

function RouteComponent() {
    return <div>Hello "/artwork/"!</div>;
}
