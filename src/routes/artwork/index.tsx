import { createFileRoute, redirect } from "@tanstack/react-router";
import { getArtWorks } from "../../api/artwork";

export const Route = createFileRoute("/artwork/")({
    component: RouteComponent,
    loader: async () => await getArtWorks(),
    beforeLoad: ({ context }) => {
        const { isLogged } = context.authentication;
        if (!isLogged()) {
            throw redirect({
                to: "/",
            });
        }
    },
});

function RouteComponent() {
    const artwork = Route.useLoaderData();

    return <div>Hello "/artwork/"!</div>;
}
