import { useState } from "react";
import Person from "./components/Person";

const data = [
  {
    index: 0,
    name: 'a',
    age: 1,
    city: 'a'
  },
  {
    index: 1,
    name: 'b',
    age: 2,
    city: 'b'
  },
  {
    index: 2,
    name: 'c',
    age: 3,
    city: 'c'
  }
]

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [personData, setPersonData] = useState(data);

  const deleteItem = (index) => {
    setPersonData(personData.filter((person) => person.index != index));
  }
  return (
    <div className="App">
      <input value={name} onChange={(e) => {setName(e.target.value)}}></input>
      <input type="number" value={age} onChange={(e) => {setAge(e.target.value)}}></input>
      <input value={city} onChange={(e) => {setCity(e.target.value)}}></input>
      <button onClick={() => {setPersonData([...personData, {index: personData.length,name,age: parseInt(age),city}])}}>+</button>
      {personData.map((person) => {
        return(
          <Person index={person.index} name={person.name} age={person.age} city={person.city} deleteItem={deleteItem}/>
        );
      })}
    </div>
  );
}

export default App;
