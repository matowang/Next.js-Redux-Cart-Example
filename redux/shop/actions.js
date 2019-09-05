export const ADD_LINE_ITEM = 'ADD_LINE_ITEM';
export const SET_LINE_ITEM_QUANTITY = 'SET_LINE_ITEM_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

export const addLineItem = (id, quantity) => (
    {
        type: ADD_LINE_ITEM,
        payload: { id, quantity }
    }
);

export const setLineItemQuantity = (id, quantity) => (
    {
        type: SET_LINE_ITEM_QUANTITY,
        payload: { id, quantity }
    }
);

export const clearCart = () => ({ type: CLEAR_CART });