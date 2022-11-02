

export const getOpenDBUrl = ({ category, difficulty, amount}) => `https://opentdb.com/api.php?&difficulty=${difficulty.toLowerCase()}&amount=${amount}&${!category || category <= 8 ? '' : `category=${category}`}`
