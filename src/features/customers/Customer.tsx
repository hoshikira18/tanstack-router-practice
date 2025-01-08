import { useSelector } from "react-redux";
import Button from "../../components/Button";
import BalanceDisplay from "../accounts/BalanceDisplay";

const Customer = () => {
    const customer = useSelector((state) => state.customer);

    return (
        <div>
            <h1>Welcome, {customer.fullName}</h1>
            <BalanceDisplay />
        </div>
    );
};

export default Customer;
