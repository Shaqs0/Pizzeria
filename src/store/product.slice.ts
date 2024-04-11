import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const PRODUCT_PERSISTENT_STATE = 'productData';

export interface ProductItem {
	id: number;
}

export interface ProductState {
	items: ProductItem[];
}

const initialState: ProductState = loadState<ProductState>(PRODUCT_PERSISTENT_STATE) ?? {
	items: []
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		clean: (state) => {
			state.items = [];
		},
		addToCart: (state, action: PayloadAction<number>) => {
			const existed = state.items.find(i => i.id === action.payload);
			if (!existed) {
				state.items.push({ id: action.payload });
				return;
			}
		}
	}});

export default productSlice.reducer;
export const productActions = productSlice.actions;