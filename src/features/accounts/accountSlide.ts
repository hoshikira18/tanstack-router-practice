import type { AccountProps } from "../../types/store";

export const initialStateAccount: AccountProps = {
    balance: 2,
    loan: 2,
    loanPurpose: "",
};

type Action =
    | {
          type: "account/deposit";
          payload: {
              amount: number;
          };
      }
    | {
          type: "account/withdraw";
          payload: {
              amount: number;
          };
      }
    | {
          type: "account/requestLoan";
          payload: {
              amount: number;
              purpose: string;
          };
      }
    | {
          type: "account/payLoan";
      };

const accountReducer = (state: AccountProps, action: Action) => {
    if (!state) return initialStateAccount;
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload.amount,
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload.amount,
            };
        case "account/requestLoan":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
            };
        case "account/payLoan":
            if (state.loan > state.balance) {
                alert("Not enough money!");
                return state;
            }
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        default:
            return state;
    }
};

// Actions
export const deposit = (amount: number) => {
    return {
        type: "account/deposit",
        payload: {
            amount,
        },
    };
};

export const withdraw = (amount: number) => {
    return {
        type: "account/withdraw",
        payload: {
            amount,
        },
    };
};

export const requestLoan = (amount: number, purpose: string) => {
    return {
        type: "account/requestLoan",
        payload: {
            amount,
            purpose,
        },
    };
};

export const payLoan = () => {
    return {
        type: "account/payLoan",
    };
};

export default accountReducer;
