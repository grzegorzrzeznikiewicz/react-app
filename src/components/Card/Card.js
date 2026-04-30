import styles from './Card.module.scss';
import {useDispatch} from 'react-redux';
import {toggleCardFavorite, removeCard} from '../../redux/cardsReducer';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    return (
        <li className={styles.card}>
            {props.title}
            <div className={styles.buttons}>
                <button
                    className={clsx(styles.button, props.isFavorite && styles.isFavorite)}
                    onClick={() => dispatch(toggleCardFavorite(props.id))}
                >
                    <i className="fa fa-star-o"/>
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(removeCard(props.id))}
                >
                    <i className="fa fa-trash"/>
                </button>
            </div>
        </li>
    );
};

export default Card;