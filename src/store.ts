import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer, { initialStateAccount } from "./features/accounts/accountSlide";
import customerReducer from "./features/customers/customerSlide";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(
    rootReducer,
    {
        account: initialStateAccount,
    },
    applyMiddleware(thunk),
);

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export default store;
