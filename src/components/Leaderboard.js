import React, { useState, useEffect } from "react"
import { getLeaderboard } from "../api/leaderboard"

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
]

const Leaderboard = (props) => {

    const { msgAlert } = props

    const [category, setCategory] = useState('')
    const [board, setBoard] = useState([])

    const handleCategoryChange = (e) => {
        if (e.target.value !== 'Any') {
            setCategory(e.target.value)
        }
        else {
            setCategory('')
        }
    }

    useEffect(() => {
        getLeaderboard(category)
            .then((res) => {
                setBoard(res.data.leaderboard)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Leaderboard FAILURE: ' + error,
                    variant: 'danger'
                })
            })
    }, [category])

    let leaderboardJSX = board.map((entry, rank) => (
        <tr key={rank + 1}>
            <td>{rank + 1}</td><td>{entry.username}</td><td>{entry.score}</td>
        </tr>
    ))

    return (
        <div style={{backgroundColor: '#240046', height: '100vh', color: 'white', paddingTop: '100px'}}>
            <div className="leaderboardContainer">
            <div className="dropdown">
                <select value={category} onChange={handleCategoryChange} className='leaderDropdown'>
                    {categories.map(category => (
                        <option value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <table style={{margin: '20px'}}>
                <tr >
                    <th className="leaderRank">Rank</th><th className="leaderUsername">Username</th><th>Score</th>
                </tr>
               
                {leaderboardJSX}
                
            </table>
        </div>
        </div>
    )
}

export default Leaderboard