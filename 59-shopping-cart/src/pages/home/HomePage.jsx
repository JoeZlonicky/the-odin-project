import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <h1 className={styles.title}>Poké Mart</h1>
      <div className={styles.description}>Your one-stop-shop for Pokémon items</div>
    </main>
  );
};

export default HomePage;
