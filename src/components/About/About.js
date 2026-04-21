import styles from './About.module.scss';
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
    return (
        <div className={styles.about}>
            <PageTitle>About</PageTitle>
            <p className={styles.subtitle}>Prosta aplikacja do zarządzania zadaniami, zbudowana w Reacie.</p>
        </div>
    );
};

export default About;
