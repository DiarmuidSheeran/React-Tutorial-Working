import logo from './logo.svg';
import './App.css';

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

function Info() {
  const title = "Inventory System"
  const showTitle = true;

  return (
    <div>
      <h1>{showTitle ? title : ""}</h1>
      <p>Manage your stuff.</p>
    </div>
  );
}

function AddItem() {
  return (
    <div>
      <form>
        <label for="text-form">Type Something</label>
        <input type="text" id="text-form"/>
        <Info />
      </form>
    </div>
  )
}

export default App;
