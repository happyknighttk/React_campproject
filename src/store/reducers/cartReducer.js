import { cartItems } from "../initialValues/cartItems";
import { ADD_TO_CART } from "../actions/cartActions";
import { REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
	cartItems: cartItems
}


export default function cartReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_TO_CART:
			let existingProduct = state.cartItems.find(c => c.product.id === payload.id);
			if (existingProduct) {
				// Create a new array with the updated product
				let updatedCartItems = state.cartItems.map(item =>
					item.product.id === existingProduct.product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
				return { ...state, cartItems: updatedCartItems };

				//let product = state.cartItems.find(c => c.product.id === payload.id)
				//if (product) {
				//	product.quantity++;
				//	return { ...state } // içerisindeki elemanları yeniden ayırarak new'lemek gibi oluşturuyor. update olduğunu referans değişince anlıyor redux
			} else {
				return { ...state, cartItems: [...state.cartItems, { quantity: 1, product: payload }] }
			}

		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
			}
		default:
			return state;
	}
}