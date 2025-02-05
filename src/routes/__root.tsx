import { createRootRoute } from "@tanstack/react-router";
import * as React from "react";
import MainLayout from "../layouts/MainLayout";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <React.Fragment>
            <MainLayout />
        </React.Fragment>
    );
}
