import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { MouseEvent } from 'react';
import { cartActions } from '../../store/сart.slice';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispath>();
	
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src='/add-to-cart_icon.svg' alt='Добавить в корзину'></img>
					</button>
					<div className={styles['rating']}>
						{props.rating}
						<img src='/rating.svg' alt='Рейтинг'></img>
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;