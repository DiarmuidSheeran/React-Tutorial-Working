import logo from './logo.svg';
import './App.css';
import { PropTypes } from "prop-types";
import Info from "./info.js"

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Sam" number="hello" />
      <AddItem text="Joe" />
      <AddItem text="Test"/>
    </div>
  );
}


function AddItem({ text, number = 4 }) {
  return (
    <div>
      <form>
        <label for="text-form">Type Something</label>
        <input type="text" value={text} id="text-form"/>
        <p>{number}</p>
        <Info />
      </form>
    </div>
  )
}

AddItem.defaultProps = {
  number: 2,
  text: "default",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
}

export default App;
