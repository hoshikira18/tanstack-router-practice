import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>
                <Link to={"/use-reducer"}>1. useReducer hook</Link>
            </p>
        </div>
    );
};

export default Home;
