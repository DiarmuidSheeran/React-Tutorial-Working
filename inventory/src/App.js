import logo from './logo.svg';
import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Sam" number={2}/>
      <AddItem text="Joe" />
      <AddItem text="Test"/>
    </div>
  );
}


function AddItem(props) {
  const value = props.text;
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
