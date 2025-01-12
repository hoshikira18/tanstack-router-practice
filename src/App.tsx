import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import UseReducer from "./pages/UseReducer";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import ErrorPage from "./pages/ErrorPage";
import LoaderPractice, { loader } from "./pages/LoaderPractice";

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
            },
            {
                path: "/use-reducer",
                element: <UseReducer />,
            },
            {
                path: "/redux",
                element: <Redux />,
            },
            {
                path: "/loader",
                element: <LoaderPractice />,
                loader: loader,
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
