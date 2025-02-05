import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const reactQuery = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 10,
            cacheTime: 1000 * 20,
        },
    },
});

root.render(
    <StrictMode>
        <QueryClientProvider client={reactQuery}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>,
);
