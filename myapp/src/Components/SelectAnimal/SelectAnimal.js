import { animals } from '../../AnimalsDb.js'; 
import './SelectAnimal.css'

export default function SelectAnimal(){
    return(
        <div className="container">
            <div className="title_selectAnimal">
                <h3>Select the Animal</h3>
        
                {
                    animals.map((animal) =>
                        <img src={require(`../../fig/fig/${animal.img}`)} alt="Animal" />
                    )
                }
            </div>
        </div>
    );
}