import styles from './ProductItems.module.css';
import { productActions } from '../../store/product.slice.ts';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { ProductItemsProps } from './ProductItems.props.ts';
import Headling from '../Headling/Headling.tsx';

function ProductItems(props: ProductItemsProps ) {
	const dispatch = useDispatch<AppDispath>();
	
	const add = () => {
		dispatch(productActions.addToCart(props.id));
		console.log('a');
	};
	
	return (
		<div className={styles['item']}>
			<div className={styles['header']}>
				<a href='/' className={styles['head_img']}><img src='/back_icon.svg'></img></a>
				<Headling>{props.name}</Headling>
				<div className={styles['checkout']}>
					<button className={styles['btn']} onClick={add}>
						<img src='/add-to-cart_icon.svg' alt='Добавить в корзину'></img>
						В корзину
					</button>
				</div>
			</div>
			<div className={styles['description']}>
				<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
				<div className={styles['info']}>
					<div className={styles['price_product']}>
						<div className={styles['price']}><p>Цена</p> {props.price}&nbsp;<span>₽</span></div>
					</div>
					<div className={styles['rating']}>
						<p>Рейтинг</p> 
						<button>{props.rating} <img src='/rating.svg'></img></button>
					</div>
					<div className={styles['ingredients']}>
						<p>Состав:</p>
						<ul>
							{props.ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductItems;