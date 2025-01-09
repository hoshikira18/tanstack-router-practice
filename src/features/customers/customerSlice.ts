import { type Slice, createSlice } from "@reduxjs/toolkit";
import type { CustomerProps } from "../../types/store";

const initialStateCustomer: CustomerProps = {
    fullName: "",
    nationalID: "",
    createAt: "",
};

const customerSlice: Slice = createSlice({
    name: "customer",
    initialState: initialStateCustomer as CustomerProps,
    reducers: {
        createCustomer: {
            prepare: (fullName: string, nationalID: string) => {
                return {
                    payload: {
                        fullName,
                        nationalID,
                    },
                };
            },
            reducer: (state, action) => {
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
            },
        },
        updateName: (state, action) => {
            state.fullName = action.payload;
        },
    },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

/*
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

export const createCustomer = (fullName, nationalID) => {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            nationalID,
            createAt: new Date().toISOString(),
        },
    };
};

export const updateName = (fullName) => {
    return {
        type: "customer/updateName",
        payload: fullName,
    };
};

export default customerReducer;

*/
