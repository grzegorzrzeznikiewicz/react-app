import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";

const Favorite = () => {
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>Tu znajdziesz swoje ulubione karty.</p>
        </div>
    );
};

export default Favorite;
