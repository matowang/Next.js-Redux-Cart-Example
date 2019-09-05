import shopData from '../../data.json'

export const getCartItemIds = ({ shop }) => shop.cart.map(({ id }) => id);

export const getCartItems = ({ shop }) => shop.cart.map(item =>
    ({
        ...item,
        ...shopData.find(({ id }) => id === item.id)
    })
)