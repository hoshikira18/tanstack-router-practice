import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { loader } from "./pages/Home";
import Redux from "./pages/Redux";
import UseReducer from "./pages/UseReducer";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import ErrorPage from "./pages/ErrorPage";

const theme = createTheme({
    /** Put your mantine theme override here */
});

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: loader,
            },
            {
                path: "/use-reducer",
                element: <UseReducer />,
            },
            {
                path: "/redux",
                element: <Redux />,
            },
        ],
    },
]);

function App() {
    return (
        <MantineProvider theme={theme}>
            <NavigationProgress />
            <RouterProvider router={router} />
        </MantineProvider>
    );
}

export default App;
