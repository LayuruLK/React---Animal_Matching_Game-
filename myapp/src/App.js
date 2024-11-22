import logo from './logo.svg';
import './App.css';
import SelectAnimal from './Components/SelectAnimal/SelectAnimal';
import AnimalName from './Components/AnimalName/AnimalName';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState();


  const receiveNum = (num) => {
    setNumber(num)
  }

  return (
    <div className="App">
      <div className="title">
      <p>{number}</p>
        <h1>ANIMAL MATCHING GAME</h1>
      </div>
      <div className='container'>
        <div className="result">

        </div>
        <div className="animalName">
          <AnimalName numfun={receiveNum}/>
          
        </div>
        <div className="animalPhotos">
          <SelectAnimal/>
        </div>
      </div>
    </div>
  );
}

export default App;
