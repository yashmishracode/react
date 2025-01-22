import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import "./App.css";

function App() {
  let FoodItem = ["Dal", "Roti", "Milk", "Salad", "Green vegetable", "Fruits"];

  return (
    <Container>
      <h1 className="Heading">Healthy Foods</h1>
      <ErrorMessage items={FoodItem} />
      <FoodInput />
      <FoodItems items={FoodItem} />
    </Container>
  );
}

export default App;
