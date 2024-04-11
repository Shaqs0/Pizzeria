import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product as ProductInterface } from '../../interfaces/product.interface';
import ProductItems from '../../components/ProductItems/ProductItems';
import { PREFIX } from '../../helpers/API';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Product() {
	const [cardProducts, setCardProducts] = useState<ProductInterface[]>([]);
	const items = useSelector((s: RootState) => s.product.items);

	const getItem = async (id: number) => {
		const { data } = await axios.get<ProductInterface>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const newItems = await Promise.all(items.map(i => getItem(i.id)));
		setCardProducts(newItems);
		return newItems;
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return (
		<>
			{console.log(items)}
			{cardProducts.length > 0 && cardProducts.map(product => (
				<ProductItems key={product.id} {...product} />
			))}
		</>
	);
}