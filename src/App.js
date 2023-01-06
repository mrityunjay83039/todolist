import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

const [currentItem, addItem] = useState("");
const [itemList, updateList] = useState([]);  // With state created an empty array too


const inputEvent = (event) => {
  addItem(event.target.value);
 
}

const listItems = () => {
  updateList((prevItems) => {
    return [...prevItems, currentItem];
  });
  addItem("");
}


  return (
    <div className="App">
      <h1 style={{textAlign:'center', color:'#fff', textDecoration:'underline'}}>To Do List</h1>
      <input 
        type="text"
        placeholder="Add Items"
        onChange={inputEvent}
        value={currentItem}
        />
      <button onClick={listItems}>+</button>
      <ol className="item_list">
        {
          itemList.map((inputVal) => {
            return <li>{inputVal}</li>
          })
        }
        
      </ol>
    </div>
  );
}

export default App;
