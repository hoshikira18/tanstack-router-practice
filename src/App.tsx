import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useAuth } from "./hooks/useAuth";
import { routeTree } from "./routeTree.gen";

const theme = createTheme({
    /** Put your mantine theme override here */
});

const router = createRouter({
    routeTree,
    context: {
        authentication: undefined!,
    },
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
