import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import UseReducer from "./pages/UseReducer";

const router = createBrowserRouter([
    {
        element: <Layout />,
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
