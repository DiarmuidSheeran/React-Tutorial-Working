import logo from './logo.svg';
import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
    </div>
  );
}


function AddItem() {
  const value = "default";
  return (
    <div>
      <form>
        <label for="text-form">Type Something</label>
        <input type="text" value={value} id="text-form"/>
        <Info />
      </form>
    </div>
  )
}

export default App;
