import logo from './logo.svg';
import './App.css';
import SelectAnimal from './Components/SelectAnimal/SelectAnimal';
import AnimalName from './Components/AnimalName/AnimalName';
import { useState } from 'react';
import Result from './Components/Result/Result';

function App() {
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();

  const receiveNum = (num) => {
    setNumber(num)
  }

  const receiveMsg = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <div className="title">
        <h1>ANIMAL MATCHING GAME</h1>
      </div>
      <div className='container'>
        <div className="result">
          <Result message={message}/>
        </div>
        <div className="animalName">
          <AnimalName numfun={receiveNum}/>
          
        </div>
        <div className="animalPhotos">
          <SelectAnimal setResultMessage={receiveMsg}/>
        </div>
      </div>
    </div>
  );
}

export default App;
