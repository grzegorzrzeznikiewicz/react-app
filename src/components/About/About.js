import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.subtitle}>Prosta aplikacja do zarządzania zadaniami, zbudowana w Reacie.</p>
        </div>
    );
};

export default About;
