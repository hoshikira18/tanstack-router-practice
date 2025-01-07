import React from "react";
import { useSelector } from "react-redux";

const BalanceDisplay = () => {
    const { balance } = useSelector((store) => store.account);
    return <div>${balance}</div>;
};

export default BalanceDisplay;
