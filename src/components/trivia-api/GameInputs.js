import { useState, useEffect } from "react";
import GamePlay from "./GamePlay";

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
  const { data, filterOptions } = props
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [game, setGame] = useState(false)

  useEffect(() =>{
    console.log(`this is the amount ${amount}`)
    console.log(`this is the category ${category}`)
    console.log(`this is the difficulty ${difficulty}`)
  }, [amount, difficulty, category]) 

  const handleCategoryChange = (e) => {
    setCategory(e.target.value )
    console.log(
      categories.findIndex((category) => category === e.target.value) + 8
    );
    setFilterOptions({
      difficulty,
      category:
        categories.findIndex((category) => category === e.target.value) + 8,
      amount,
    });
    // setCategory(e.target.value)
    console.log(e.target.value)
  };
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value)
    setFilterOptions({
      difficulty: e.target.value,
      category,
      amount,
    });
    // setDifficulty(e.target.value)
  };


  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    setFilterOptions({
      difficulty,
      category,
      amount: Number.parseInt(e.target.value),
    });
    // setAmount(e.target.value)
  };

  const handleSubmit = (e) =>{
    console.log(`category: ${category}, amount: ${amount}, difficulty ${difficulty}`)
    console.log(filterOptions)
    e.preventDefault()
    e.disabled = true
    setGame(true)
  }
  if (category === '' || difficulty === '' || amount === '' || game === false) {
    return (
      <form>
        <div className="dropdown">
            
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((category, idx) => (
              <option value={category} key={idx}>
                {category}
              </option>
            ))}
          </select>
        </div>
 
        <div className="dropdown">
          <select value={difficulty} onChange={handleDifficultyChange}>
            {difficulties.map((difficulty, idx) => (
              <option value={difficulty} key={idx}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown">
          <select value={amount} onChange={handleAmountChange}>
            {amounts.map((amount, idx) => (
              <option value={amount} key={idx}>
                {amount}
              </option>
            ))}
          </select>
        </div>
        {/* <button onClick={handleSubmit}>submit</button> */}
      </form>
    );
  }else{
    return(
    <>
    hey
    <GamePlay/>
     
    </>
    )
  }
};

export default GameInputs;
