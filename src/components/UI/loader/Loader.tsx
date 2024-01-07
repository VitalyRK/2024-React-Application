import styles from './index.module.css';

const Loader = () => {
  return (
    <div className={styles.loader__box}>
      <div className={styles.loader}></div>
      <div className={styles.earth}>🌎</div>
    </div>
  );
};

export default Loader;
