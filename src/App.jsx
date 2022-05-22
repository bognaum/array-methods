// import logo from './logo.svg';
import './App.css';
import './code.css';
import FilteredList from './FilteredList';

import arrMethods from "./data/array-methods";

console.log(`arrMethods >>`, arrMethods);

function App() {
  return (
    <div className="App">
      <h1>Array methods</h1>
      <FilteredList></FilteredList>
    </div>
  );
}

export default App;
