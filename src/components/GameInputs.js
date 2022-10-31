import { useState } from "react"


 

const categories = [
    'General Knowledge',
    'Entertainment: Books',
    'Entertainment: Film',
    'Entertainment: Music',
    'Entertainment: Musicals & Theatres',
    'Entertainment: Television',
    'Entertainment: Video Games',
    'Entertainment: Board Games',
    'Science & Nature',
    'Science: Computers',
    'Science: Mathematics',
    'Science: Gadgets',
    'Mythology',
    'Sports',
    'Geography',
    'History',
    'Politics',
    'Art',
    'Celebrities',
    'Animals',
    'Vehicles',
    'Entertainment: Comics',
    'Entertainment: Japanese Anime & Manga',
    'Entertainment: Cartoon & Animations'    
]

const difficulties = [
    'Easy',
    'Medium',
    'Hard'
]
   


const numbers =[
    '5', 
    '10',
    '15',
    '20'
]
const listCategories = categories.map((category) => 
    <li className="dropdown-item" type="radio" name="category">{category}</li>
)
const listDifficulty = difficulties.map((difficulty) =>
    <li className="dropdown-item" type="radio" name="difficulty">{difficulty}</li>
)
const listNumbers = numbers.map((number)=>
    <li className="dropdown-item" type="radio" name="number">{number}</li>
)


const GameInputs = () =>{

    const [difficulty, setDifficulty] = useState(difficulties[0])


    const handleChange = (e) =>{setDifficulty(e.target.value)}
   
   return(
    <>
    <form>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">Category</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               {listCategories}
            </ul>
        </div>
    
        <div className="dropdown">
           <select value={difficulty} onChange={handleChange}>
           { difficulties.map((difficulty, idx) =>(
                <option value={difficulty} key={idx}>{difficulty}</option>
            ))}
           </select>
        </div>
  
    <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">Number</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {listNumbers}
            </ul>
        </div>
   </form>
  
    </>

 
   )


}

export default GameInputs