import { useState } from 'react';
import { animals } from '../../AnimalsDb.js'; 

export default function AnimalName(props){
    const [animalName, setAnimalName] = useState();
    const [index,setIndex] = useState();

    function randomName() {
        let number = Math.floor(Math.random() * 10) + 1;
        let animal = animals[number];
        setAnimalName(animal.name);
        setIndex(number);
    }

    
    return(
        <>
            <button onClick={() =>{randomName()}}>Start</button>
            <p>{animalName}</p>
            {props.numfun(index)}
        </>
    );
}