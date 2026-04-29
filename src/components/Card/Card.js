import styles from './Card.module.scss';
import {useDispatch} from 'react-redux';
import {toggleCardFavorite} from '../../redux/store';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    return (
        <li className={styles.card}>
            {props.title}
            <button
                className={clsx(styles.button, props.isFavorite && styles.isFavorite)}
                onClick={() => dispatch(toggleCardFavorite(props.id))}
            >
                <i className="fa fa-star-o"/>
            </button>
        </li>
    );
};

export default Card;