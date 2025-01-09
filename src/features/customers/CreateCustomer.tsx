import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { createCustomer } from "./customerSlice";

const CreateCustomer = () => {
    const [fullName, setFullName] = useState("");
    const [nationalID, setNationalID] = useState("");

    const dispatch = useDispatch();

    const handleClick = () => {
        if (!fullName || !nationalID) return;
        dispatch(createCustomer(fullName, nationalID));
    };

    return (
        <div className="bg-blue-200 flex flex-col gap-4 p-4 rounded-md">
            <label htmlFor="fullName">
                Full Name:
                <input
                    type="text"
                    id="fullName"
                    className="ml-2 rounded-md p-1"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </label>

            <label htmlFor="nationalID">
                National ID
                <input
                    type="text"
                    id="nationalID"
                    className="ml-2 rounded-md p-1"
                    value={nationalID}
                    onChange={(e) => setNationalID(e.target.value)}
                />
            </label>

            <Button onClick={handleClick}>Create Customer</Button>
        </div>
    );
};

export default CreateCustomer;
