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

  if (showTitle) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Manage your stuff.</p>
      </div>
    );
  } else {
    return <p>Empty</p>
  }
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
