import styles from "./Item.module.css";
const Items = ({foodItem}) => {
    return (
         <li  className={styles.kgitem}><span className={styles.kgspan}>{foodItem}</span></li>

    );
}

export default Items;