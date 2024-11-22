import { useState } from 'react';
import { animals } from '../../AnimalsDb.js'; 

export default function AnimalName(){
    const [animalName, setAnimalName] = useState();

    function randomName() {
        let number = Math.floor(Math.random() * 10) + 1;
        let animal = animals[number];
        setAnimalName(animal.name);
    }
    return(
        <>
            <button onClick={() =>{randomName()}}>Start</button>
            <p>{animalName}</p>
        </>
    );
}