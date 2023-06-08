import React, { useState } from 'react';
import Str from "./Str";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import './styles/App.css';
import MyTable from "./MyTable";

function App() {

    const [elements, setElements] = useState([
        { id: 0, name: "123", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 1, name: "456", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 2, name: "789", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 3, name: "111", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},

        { id: 4, name: "123", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 5, name: "456", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 6, name: "789", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 7, name: "111", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},

        { id: 8, name: "123", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 9, name: "456", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 10, name: "789", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},
        { id: 11, name: "111", dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })},

    ])
    const [name, setname] = useState("")

    const addElement = (e) => {
        e.preventDefault()
        const newElement = {
            id: elements.at(-1).id + 1,
            name,
            dateCreation: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' }),
        }
        setElements([...elements, newElement])
        setname("")
    }
    const removeElement = (id) => {
        setElements(elements.filter(p => p.id != id))
    }

  return (
      <div className="App">
          <div>
              <form className="form">
                  <MyInput
                      placeholder= "Type element"
                      value={name}
                      onChange={e => setname(e.target.value)}/>
                  <MyButton onClick = {addElement}>Add_Element</MyButton>
              </form>
          </div>

          <div>
              <MyTable table={elements} remove={removeElement}/>
          </div>
      </div>
  );
}
export default App;
