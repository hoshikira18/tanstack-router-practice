import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import UseReducer from "./pages/UseReducer";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import ActionPractice, { action } from "./pages/ActionPractice";
import CompoundComponent from "./pages/CompoundComponent";
import ErrorPage from "./pages/ErrorPage";
import LoaderPractice, { loader } from "./pages/LoaderPractice";
import ModalPractice from "./pages/ModalPractice";
import ReactHookFormPractice from "./pages/ReactHookFormPractice";
import ReactQueryPractice from "./pages/ReactQueryPractice";

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
            {
                path: "/action",
                element: <ActionPractice />,
                action: action,
            },
            {
                path: "/react-query",
                element: <ReactQueryPractice />,
            },
            {
                path: "/react-hook-form",
                element: <ReactHookFormPractice />,
            },
            {
                path: "/compound-components",
                element: <CompoundComponent />,
            },
            {
                path: "/modal",
                element: <ModalPractice />,
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
