import { createStore } from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        case "account/requestLoan":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload,
            };
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

const deposit = (amount) => {
    return {
        type: "account/deposit",
        payload: amount,
    };
};

const withdraw = (amount) => {
    return {
        type: "account/withdraw",
        payload: amount,
    };
};

const requestLoan = (amount, purpose) => {
    return {
        type: "account/requestLoan",
        payload: {
            amount,
            purpose,
        },
    };
};

const payLoan = () => {
    return {
        type: "account/payLoan",
    };
};
