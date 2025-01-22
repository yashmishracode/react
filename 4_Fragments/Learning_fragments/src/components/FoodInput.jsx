import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnchange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Input Food Items Here"
      className={styles.foodInput}
      onChange={handleOnchange}
    ></input>
  );
};

export default FoodInput;
