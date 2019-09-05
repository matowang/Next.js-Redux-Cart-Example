import { connect } from 'react-redux'
import { getCartItems } from '../redux/shop/selectors.js'
import Cart from '../components/cart';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        items: getCartItems(state)
    }
}

const CartContainer = connect(
    mapStateToProps,
)(Cart)

export default CartContainer