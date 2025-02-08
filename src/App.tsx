import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { RouterProvider, createRouteMask, createRouter } from "@tanstack/react-router";
import { useAuth } from "./hooks/useAuth";
import { routeTree } from "./routeTree.gen";

const theme = createTheme({
    /** Put your mantine theme override here */
});

const searchMasks = createRouteMask({
    routeTree,
    from: "/search",
    to: "/search",
    search: (prev) => ({
        ...prev,
        query: undefined,
        categories: undefined,
        hasDiscount: undefined,
    }),
});

const router = createRouter({
    routeTree,
    context: {
        authentication: undefined!,
    },
    routeMasks: [searchMasks],
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    const authentication = useAuth();
    return (
        <MantineProvider theme={theme}>
            <NavigationProgress />
            <RouterProvider
                router={router}
                context={{
                    authentication,
                }}
            />
        </MantineProvider>
    );
}

export default App;
