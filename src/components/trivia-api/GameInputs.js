import { useState, useEffect } from "react";
import './gameInputs.css'


const categories = [
  {name: "Any", value: 8},
  {name: "General Knowledge", value: 9 },
  {name: "Entertainment: Books", value: 10},
  {name: "Entertainment: Film", value: 11},
  {name: "Entertainment: Music", value: 12},
  {name: "Entertainment: Musicals & Theatres", value: 13},
  {name: "Entertainment: Television", value: 14},
  {name: "Entertainment: Video Games", value: 15},
  {name: "Entertainment: Board Games", value: 16},
  {name: "Science & Nature", value: 17},
  {name: "Science: Computers", value: 18},
  {name: "Science: Mathematics", value: 19},
  {name: "Science: Gadgets", value: 20},
  {name: "Mythology", value: 21},
  {name: "Sports", value: 22},
  {name: "Geography", value: 23},
  {name: "History", value: 24},
  {name: "Politics", value: 25},
  {name: "Art", value: 26},
  {name: "Celebrities", value: 27},
  {name: "Animals", value: 28},
  {name: "Vehicles", value: 29},
  {name: "Entertainment: Comics", value: 30},
  {name: "Entertainment: Japanese Anime & Manga", value: 31},
  {name: "Entertainment: Cartoon & Animations", value: 32},
];

const difficulties = ["Easy", "Medium", "Hard"];

const amounts = ["5", "10", "15", "20"];

const GameInputs = ({setFilterOptions}, props) => {
  // const { filterOptions } = props
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState('');
 
  useEffect(() =>{
    console.log(`this is the amount ${amount}`)
    console.log(`this is the category ${category}`)
    console.log(`this is the difficulty ${difficulty}`)
  }, [amount, difficulty, category]) 

  const handleCategoryChange = (e) => {
    let catObject = categories.find(category => {
      return (category.name === e.target.value)
    })
    setCategoryName(e.target.value)
    setCategory(catObject.value)
    console.log(
      categories.findIndex((category) => category.name === e.target.value) + 8
    );
    setFilterOptions({
      difficulty,
      category:
        categories.findIndex((category) => category.name === e.target.value) + 8,
      amount,
    });
    console.log(e.target.value)
  };
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value)
    setFilterOptions({
      difficulty: e.target.value,
      category,
      amount,
    });
   
  };


  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    setFilterOptions({
      difficulty,
      category,
      amount: Number.parseInt(e.target.value),
    });
   
  };


    return (
      <div>
      {/* <form className="gameForm"> */}
        <div >
            
          <select value={categoryName} onChange={handleCategoryChange} id='category' placeholder="">
            {categories.map((category, idx) => (
              <option value={category.name} key={idx}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
 
        <div >
          <select value={difficulty} onChange={handleDifficultyChange} id='gameDifficulty'>
            {difficulties.map((difficulty, idx) => (
              <option value={difficulty} key={idx}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select value={amount} onChange={handleAmountChange} id='amount'>
            {amounts.map((amount, idx) => (
              <option value={amount} key={idx}>
                {amount}
              </option>
            ))}
          </select>
        </div>
      {/* </form> */}
      </div>
    );
};

export default GameInputs;
