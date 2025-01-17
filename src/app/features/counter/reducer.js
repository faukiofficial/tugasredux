import { INC, DEC } from "./constants";

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                count: state.count + action.value,
            };
        case DEC:
            return {
                ...state,
                count: state.count - action.value,
            };
        default:
            return state;
    }
};

export default counterReducer;
