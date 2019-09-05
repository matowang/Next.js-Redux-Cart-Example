import { ADD_LINE_ITEM, SET_LINE_ITEM_QUANTITY, CLEAR_CART } from "./actions";

const initialState = [
    {
        id: 4367,
        quantity: 1
    }
];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_LINE_ITEM: {
            const { id, quantity } = payload;
            let itemExists = false;
            const newState = state.map(item => {
                if (item.id === id) {
                    itemExists = true;
                    return { ...item, quantity: item.quantity + quantity }
                } else
                    return item
            });
            if (itemExists)
                return newState
            else
                return [
                    ...newState,
                    { id, quantity }
                ]
        }
        case SET_LINE_ITEM_QUANTITY: {
            const { id, quantity } = payload;
            let itemExists = false;
            const newState = state.map(item => {
                if (item.id === id) {
                    itemExists = true;
                    return { ...item, quantity }
                } else
                    return item
            });
            if (itemExists)
                return newState
            else
                return [
                    ...newState,
                    { id, quantity }
                ]
        }
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
}