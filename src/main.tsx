import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.js";
import store from "./store.ts";

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
            <Provider store={store}>
                <App />
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>,
);
