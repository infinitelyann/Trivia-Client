import React from "react";
import { useState } from "react";

const GameInputs = () =>{
    
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')  
    const [number, setNumber] = useState('')    
    

    const settingChoice = () =>{
        setCategory()

    }
  return(
     <>
 
     <form>   
         <div className="dropdown">
             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
             data-bs-toggle="dropdown" aria-expanded="false"> Choose Category:</button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="10">Entertainment: Books</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="11">Entertainment: Film</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="12">Entertainment: Music</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="13">Entertainment: Musicals & Theatres</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="14">Entertainment: Television</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="15">Entertainment: Video Games</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="16">Entertainment: Board Games</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="17">Science & Nature</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="18">Science: Computers</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="19">Science: Mathematics</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="20">Science: Gadgets</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="21">Mythology</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="22">Sports</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="23">Geography</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="24">History</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="25">Politics</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="26">Art</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="27">Celebrities</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="28">Animals</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="29">Vehicles</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="30">Entertainment: Comics</button> </li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="31">Entertainment: Japanese Anime & Manga</button></li>
                 <li> <button className="dropdown-item" type="radio" name="category" onClick={settingChoice} value="32">Entertainment: Japanese Anime & Manga</button></li>
             </ul>
        </div>
        <div className="dropdown">
         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
             data-bs-toggle="dropdown" aria-expanded="false">Choose Difficulty</button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><button className="dropdown-item" type="radio" name="difficulty" onClick={settingChoice} value="Easy">Easy</button></li>
             <li><button className="dropdown-item" type="radio" name="difficulty" onClick={settingChoice} value="Medium">Medium</button></li>
             <li><button className="dropdown-item" type="radio" name="difficulty" onClick={settingChoice} value="Hard">Hard</button></li>
         </ul>
        </div>
 
        
        <div className="dropdown">  
         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
             data-bs-toggle="dropdown" aria-expanded="false"># of Questions</button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><button className="dropdown-item" type="radio" name="number" onClick={settingChoice} value="5">5</button></li>
             <li><button className="dropdown-item" type="radio" name="number" onClick={settingChoice} value="5">10</button></li>
             <li><button className="dropdown-item" type="radio" name="number" onClick={settingChoice} value="5">15</button></li>
             <li><button className="dropdown-item" type="radio" name="number" onClick={settingChoice} value="5">20</button></li>
         </ul>
        </div>
        
        
    </form> 
     </>
  )
 
 
        
 }

       

export default GameInputs