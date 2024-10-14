import Cards from '../components/Cards';
import styles from './index.module.scss'; 

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Card Project</h1>
            <Cards />
        </div>
    );
};

export default Home;
