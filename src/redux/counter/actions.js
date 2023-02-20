import { INCREMENT } from "./actionTypes"
import { DECREMENT } from "./actionTypes"

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};