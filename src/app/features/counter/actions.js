import { INC, DEC } from "./constants";

export const increment = (value) => ({
    type: INC,
    value,
});

export const decrement = (value) => ({
    type: DEC,
    value,
});

export const decrementWithCheckingAction = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    };
};
