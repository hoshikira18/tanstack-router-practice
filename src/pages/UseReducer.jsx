import { useEffect, useReducer } from "react";

const actions = {
    increment: "INC",
    decrement: "DEC",
    setCount: "SC",
    setStep: "SS",
    reset: "RESET",
};

const initialState = {
    count: 0,
    step: 1,
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.increment:
            return {
                ...state,
                count: state.count + state.step,
            };
        case actions.decrement:
            return {
                ...state,
                count: state.count - state.step,
            };
        case actions.setCount:
            return {
                ...state,
                count: action.payload,
            };
        case actions.setStep:
            return {
                ...state,
                step: action.payload,
            };
        case actions.reset:
            return initialState;
        default:
            throw new Error("Unknown action type");
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    const handleIncrease = () => {
        dispatch({ type: actions.increment });
    };

    const handleDecrease = () => {
        dispatch({ type: actions.decrement });
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        dispatch({
            type: actions.setCount,
            payload: Number(value),
        });
    };

    const handleStepChange = (e) => {
        const value = e.target.value;
        dispatch({
            type: actions.setStep,
            payload: Number(value),
        });
    };

    const handleReset = () => {
        dispatch({
            type: actions.reset,
            payload: initialState,
        });
    };

    useEffect(() => {
        document.title = "useReducer hook";
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition duration-200"
                    >
                        Reset
                    </button>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="step" className="text-sm font-medium text-gray-700">
                            Step:
                        </label>
                        <input
                            id="step"
                            onChange={handleStepChange}
                            value={step}
                            type="number"
                            className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        type={"button"}
                        onClick={handleDecrease}
                        className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition duration-200"
                    >
                        -
                    </button>
                    <input
                        onChange={handleInputChange}
                        value={count}
                        type="number"
                        className="w-24 px-2 py-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type={"button"}
                        onClick={handleIncrease}
                        className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition duration-200"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
