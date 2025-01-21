import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer.jsx";

function App() {
  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <ButtonsContainer />
    </div>
  );
}

export default App;
