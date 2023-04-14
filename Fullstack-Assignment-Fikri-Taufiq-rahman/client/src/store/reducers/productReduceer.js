import { PRODUCT_FETCHDATA, PRODUCT_ADD } from "../actions/actionType";

const initialProductState = {
    products: [],
};

function productReducer(state = initialProductState, action) {
    switch (action.type) {
        case PRODUCT_FETCHDATA:
            return {
                ...state,
                products: action.payload,
            };
        case PRODUCT_ADD:
            state.products.push(action.payload);
            return {
                ...state,
                products: state.products,
            };
        default:
            return state;
    }
}

export default productReducer;
