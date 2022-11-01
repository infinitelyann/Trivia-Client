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

const GameInputs = ({ setFilterOptions }) => {
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(amounts[0]);

  const handleDifficultyChange = (e) => {
    setFilterOptions({
      difficulty: e.target.value,
      category,
      amount,
    });
  };
  const handleCategoryChange = (e) => {
    console.log(
      categories.findIndex((category) => category === e.target.value) + 8
    );
    setFilterOptions({
      difficulty,
      category:
        categories.findIndex((category) => category === e.target.value) + 8,
      amount,
    });
  };

  const handleAmountChange = (e) => {
    setFilterOptions({
      difficulty,
      category,
      amount: Number.parseInt(e.target.value),
    });
  };

  return (
    <>
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
      </form>
    </>
  );
};

export default GameInputs;
