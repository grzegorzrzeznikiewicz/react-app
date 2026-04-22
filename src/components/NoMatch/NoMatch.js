import styles from './NoMatch.module.scss';
import PageTitle from "../PageTitle/PageTitle";

const NoMatch = () => {
    return (
        <div className={styles.nomatch}>
            <PageTitle>404 Not Found</PageTitle>
        </div>
    );
};

export default NoMatch;
