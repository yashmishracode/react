import styles from "./Item.module.css";
const Items = ({ foodItem }) => {
  const handleBuy = () => {
    console.log(`${foodItem} is clicked`);
  };

  return (
    <li className={`${styles.kgitem} list-group-item`}>
      <span className={styles.kgspan}>{foodItem}</span>
      <button className={` btn btn-info ${styles.button}`} onClick={handleBuy}>
        Buy
      </button>
    </li>
  );
};

export default Items;
