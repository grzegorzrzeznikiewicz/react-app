import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import {useSelector} from 'react-redux';
import {getFavoriteCards} from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
    const cards = useSelector(getFavoriteCards);
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            {cards.length === 0 ? (
                <p>No cards...</p>
            ) : (
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
                </ul>
            )}
        </div>
    );
};

export default Favorite;
