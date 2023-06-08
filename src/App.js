import React, { useState } from 'react';
import Str from "./Str";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import './styles/App.css';
import MyTable from "./MyTable";

function App() {

    const [elements, setElemeents] = useState([
        { id: 0, name: "123", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 1, name: "456", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 2, name: "789", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 3, name: "111", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
    ])
    const [name, setname] = useState("")
    const addElement = (e) => {
        e.preventDefault()
        const newElement = {
            id: elements.length,
            name,
            dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' }),
        }
        setElemeents([...elements, newElement])
        setname("")
    }


  return (
      <div className="App">
          <form className="form">
              <MyInput
                  value={name}
                  onChange={e => setname(e.target.value)}/>
              <MyButton onClick={addElement}>Add_element</MyButton>
          </form>
          <div className="table">
              <MyTable table={elements} key = {elements.id}/>
          </div>

      </div>
  );
}
export default App;
