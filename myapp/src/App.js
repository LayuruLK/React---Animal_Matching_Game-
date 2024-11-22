import logo from './logo.svg';
import './App.css';
import SelectAnimal from './Components/SelectAnimal/SelectAnimal';
import AnimalName from './Components/AnimalName/AnimalName';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>ANIMAL MATCHING GAME</h1>
      </div>
      <div className='container'>
        <div className="result">

        </div>
        <div className="animalName">
          <AnimalName/>
        </div>
        <div className="animalPhotos">
          <SelectAnimal/>
        </div>
      </div>
    </div>
  );
}

export default App;
