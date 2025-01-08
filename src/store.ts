import { combineReducers, createStore } from "redux";
import accountReducer, { initialStateAccount } from "./features/accounts/accountSlide";
import customerReducer from "./features/customers/customerSlide";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer, {
    account: initialStateAccount,
});

export default store;
