import { combineReducers } from "redux";
import { createStore } from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createAt: "",
};

const accountReducer = (state = initialStateAccount, action = {}) => {
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
const customerReducer = (state = initialStateCustomer, action = {}) => {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createAt: action.payload.createAt,
            };
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer);

// Actions
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

const createCustomer = (fullName, nationalID) => {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            nationalID,
            createAt: new Date().toISOString(),
        },
    };
};

const updateName = (fullName) => {
    return {
        type: "customer/updateName",
        payload: fullName,
    };
};
