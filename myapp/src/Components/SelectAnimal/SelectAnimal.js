import { useState, useEffect } from 'react';
import { animals } from '../../AnimalsDb.js'; 
import './SelectAnimal.css';


const shuffleArray = (array) => {
  const shuffled = [...array]; 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
  }
  return shuffled;
};

export default function AnimalName() {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);

  useEffect(() => {
    setShuffledAnimals(shuffleArray(animals));
  }, []);

  return (
    <div className='imglist'>
      {shuffledAnimals.map((animal, index) => (
        <div key={index}>
          <img
            src={require(`../../fig/fig/${animal.img}`)}
            alt={animal.name}
          />
          
        </div>
      ))}
    </div>
  );
}
