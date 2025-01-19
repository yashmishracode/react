import "./App.css";
// import React from "react"; (optional)
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let FoodItem = ["Dal", "Roti", "Milk", "Salad", "Green vegetable", "Fruits"];

  return (
    // <React.Fragment>(optional)
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {FoodItem.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
      {/* </React.Fragment>(optional)  */}
    </>
  );
}

export default App;
