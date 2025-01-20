import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let FoodItem = ["Dal", "Roti", "Milk", "Salad", "Green vegetable", "Fruits"];

  return (
    <>
      <h1 className="Heading">Healthy Foods</h1>
      <ErrorMessage items={FoodItem} />
      <FoodItems items={FoodItem} />
    </>
  );
}

export default App;
