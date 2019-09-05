import { connect } from 'react-redux';

import ProductCard from '../components/product-card';

import { addLineItem } from '../redux/shop/actions';

const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addLineItem(id, 1)),
    }
}

const ProductCardContainer = connect(
    null,
    mapDispatchToProps
)(ProductCard)

export default ProductCardContainer