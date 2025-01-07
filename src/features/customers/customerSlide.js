const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createAt: "",
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
