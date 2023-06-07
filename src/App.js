import React, { useState } from 'react';
import Str from "./Str";

function App() {

    const [elements, setElemeents] = useState([
        { id: 0, name: "123"},
        { id: 1, name: "456"},
        { id: 2, name: "789"},
        { id: 3, name: "111"},
    ])
    const [name, setname] = useState("")
    const addElement = (e) => {
        e.preventDefault()
        const newElement = {
            id: elements.length,
            name
        }
        setElemeents([...elements, newElement])
        console.log(newElement)
    }


  return (
      <div className="App">
          <div>
              <h1>Список</h1>
          </div>
          <form>
              <input
                  value={name}
                  onChange={e => setname(e.target.value)}
                  type = "text"
                  placeholder="Element "></input>
              <button onClick={addElement}>Add_element</button>
          </form>
          {elements.map(element =>
          <Str element={element} key = {element.id}/>
          )}
          </div>
  );
}
export default App;
