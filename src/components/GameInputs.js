import { useState } from "react";

const categories = [
  "Any",
  "General Knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals & Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Games",
  "Science & Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Science: Gadgets",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Entertainment: Comics",
  "Entertainment: Japanese Anime & Manga",
  "Entertainment: Cartoon & Animations",
];

const difficulties = ["Easy", "Medium", "Hard"];

const amounts = ["5", "10", "15", "20"];

    const handleDifficultyChange = (e) => {
        setFilterOptions({
           difficulty: e.target.value,
           category,
           amount
         })
      }
    const handleCategoryChange = (e) =>{
        console.log(categories.findIndex(category => category === e.target.value) + 8)
        setFilterOptions({
            difficulty,
            category:categories.findIndex(category => category === e.target.value) + 8,
            amount
          })

    }

    const handleAmountChange = (e) =>{
        setFilterOptions({
            difficulty,
            category,
            amount: Number.parseInt(e.target.value),
          })
    }
   
   return(
    <>
    <form>
        <div className="dropdown">
        <select value={category} onChange={handleCategoryChange}>
           { categories.map((category, idx) =>(
                <option value={category} key={idx}>{category}</option>
            ))}
           </select>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Choose Difficulty
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="difficulty"
                onClick={settingChoice}
                value="Easy"
              >
                Easy
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="difficulty"
                onClick={settingChoice}
                value="Medium"
              >
                Medium
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="difficulty"
                onClick={settingChoice}
                value="Hard"
              >
                Hard
              </button>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            # of Questions
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="number"
                onClick={settingChoice}
                value="5"
              >
                5
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="number"
                onClick={settingChoice}
                value="5"
              >
                10
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="number"
                onClick={settingChoice}
                value="5"
              >
                15
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="radio"
                name="number"
                onClick={settingChoice}
                value="5"
              >
                20
              </button>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default GameInputs;
