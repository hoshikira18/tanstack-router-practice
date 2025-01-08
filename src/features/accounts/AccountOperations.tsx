import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import type { StoreProps } from "../../types/store";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlide";

const AccountOperations = () => {
    const [depositAmount, setDepositAmount] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [loanPurpose, setLoanPurpose] = useState("");
    const [currency, setCurrency] = useState("USD");

    const dispatch = useDispatch();
    const { loan: currentLoan, loanPurpose: currentLoanPurpose } = useSelector(
        (store: StoreProps) => store.account,
    );

    const handleDeposit = () => {
        if (!depositAmount) return;
        dispatch(deposit(depositAmount));
        setDepositAmount(0);
    };

    const handleWithdraw = () => {
        if (!withdrawAmount) return;
        dispatch(withdraw(withdrawAmount));
        setWithdrawAmount(0);
    };

    const handleRequestLoan = () => {
        if (!loanAmount || !loanPurpose) return;
        dispatch(requestLoan(loanAmount, loanPurpose));
        setLoanAmount(0);
        setLoanPurpose("");
    };

    const handlePayLoan = () => {
        dispatch(payLoan());
    };

    return (
        <div className="bg-blue-200 flex flex-col gap-4 p-4 rounded-md">
            <h2>Your account operations</h2>
            <div className="space-x-4">
                <label htmlFor="depositAmount">
                    Deposit:
                    <input
                        type="number"
                        id="depositAmount"
                        className="ml-2 rounded-md p-1"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(Number(e.target.value))}
                    />
                </label>
                <label htmlFor="currency">
                    <select
                        id="currency"
                        className="ml-2 rounded-md p-1"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
                <Button onClick={handleDeposit}>DEPOSIT</Button>
            </div>
            <div className="space-x-4">
                <label htmlFor="withdrawAmount">
                    Withdraw:
                    <input
                        type="text"
                        id="withdrawAmount"
                        className="ml-2 rounded-md p-1"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                    />
                </label>
                <Button onClick={handleWithdraw}>WITHDRAW</Button>
            </div>
            <div className="space-x-4">
                <label htmlFor="loanAmount">
                    Loan amount:
                    <input
                        type="text"
                        id="loanAmount"
                        placeholder="Loan amount"
                        className="ml-2 rounded-md p-1"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                </label>
                <label htmlFor="loanPurpose">
                    <input
                        type="text"
                        id="loanPurpose"
                        placeholder="Loan purpose"
                        className="ml-2 rounded-md p-1"
                        value={loanPurpose}
                        onChange={(e) => setLoanPurpose(e.target.value)}
                    />
                </label>
                <Button onClick={handleRequestLoan}>REQUEST LOAN</Button>
            </div>
            {currentLoan > 0 && (
                <div>
                    <span>
                        Pay pack ${currentLoan} ({currentLoanPurpose})
                    </span>
                    <Button onClick={handlePayLoan}>Pay loan</Button>
                </div>
            )}
        </div>
    );
};

export default AccountOperations;
