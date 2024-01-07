import styles from './index.module.css';

interface counterProps {
  count: number;
  setCount: (value: number) => void;
}

function Counter({ count, setCount }: counterProps) {
  const handle = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.counter}>
      <h2>{count}</h2>
      <button onClick={handle}>Clack!</button>
    </div>
  );
}

export default Counter;
