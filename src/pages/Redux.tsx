import React from "react";
import { useSelector } from "react-redux";
import AccountOperations from "../features/accounts/AccountOperations";
import CreateCustomer from "../features/customers/CreateCustomer";
import Customer from "../features/customers/Customer";

const Redux = () => {
    const fullName = useSelector((state) => state.customer.fullName);

    return (
        <div className="space-y-3">
            <h1>React-Redux Bank 🏦</h1>
            {fullName === "" ? (
                <CreateCustomer />
            ) : (
                <>
                    <Customer />
                    <AccountOperations />
                </>
            )}
        </div>
    );
};

export default Redux;
