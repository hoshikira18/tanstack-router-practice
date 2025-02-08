import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
    component: RouteComponent,
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
    return <Outlet />;
}
