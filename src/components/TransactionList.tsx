import globalStyles from "../index.module.scss";
import styles from "./TransactionList.module.scss";

type DataProps = {
  id: number;
  profilePic: string;
  name: string;
  date: string;
  time: string;
  amount: number;
  status: string;
  isNegative: boolean;
};

const userData: DataProps[] = [
  {
    id: 1,
    profilePic: "profile-pic-1.jpg",
    name: "Aokiji",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: 13,
    status: "Received",
    isNegative: false,
  },

  {
    id: 2,
    profilePic: "profile-pic-2.jpg",
    name: "Kizaru",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: 9,
    status: "Outgoing",
    isNegative: true,
  },

  {
    id: 3,
    profilePic: "profile-pic-3.jpg",
    name: "Akainu",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: 20,
    status: "Received",
    isNegative: false,
  },
];

const TransactionList = () => {
  return (
    <>
      {userData.map((user) => (
        <div key={user.id} className={styles.transactionList}>
          <div className={styles.left}>
            <img
              src={
                new URL(`../assests/${user.profilePic}`, import.meta.url).href
              }
              alt="profile-pic"
            />

            <div className={styles.info}>
              <h2>{user.name}</h2>
              <div className={`${globalStyles.textGray} ${styles.dnt}`}>
                <h3>{user.date}</h3>
                <div className={styles.round}></div>
                <h3>{user.time}</h3>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <h2 style={{ color: `${user.isNegative ? "#f82f30" : "#10c214"}` }}>
              {user.isNegative ? "-" : "+"}${user.amount.toFixed(2)}
            </h2>
            <h3 style={{ fontWeight: 500 }}>{user.status}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default TransactionList;
