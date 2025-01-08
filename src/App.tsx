import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import UseReducer from "./pages/UseReducer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/use-reducer" element={<UseReducer />} />
                    <Route path="/redux" element={<Redux />} />
                </Route>
                <Route path={"*"} element={<div>Not Found 404</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
