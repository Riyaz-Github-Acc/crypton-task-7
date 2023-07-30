import TransactionList from "./components/TransactionList";

import globalStyles from "./index.module.scss";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.left}>Last Transactions</h1>
        <h1 className={`${styles.right} ${globalStyles.textGray}`}>See All</h1>
      </div>

      <div className={styles.list}>
        <TransactionList />
      </div>
    </div>
  );
};

export default App;
