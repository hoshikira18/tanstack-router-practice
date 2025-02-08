import { createRootRouteWithContext } from "@tanstack/react-router";
import * as React from "react";
import type { AuthContext } from "../hooks/useAuth";
import MainLayout from "../layouts/MainLayout";

type RouteContext = {
    authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouteContext>()({
    component: RootComponent,
});

function RootComponent() {
    return (
        <React.Fragment>
            <MainLayout />
        </React.Fragment>
    );
}
