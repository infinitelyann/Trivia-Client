import React, { useState, useEffect } from 'react'

const GameCarousel = (props) => {
    const { gameData } = props
    // console.log("the proops",props)
    const defaultData = {}
    const [gameQs, setGameQ] = useState(null)
    let gameQ
    // console.log("look here",gameQs)

    // setGameQ(gameQs => ({
    //   ...gameQs, ...defaultData
    // }))
    useEffect (() => {
      setGameQ(gameData)
      console.log("how bout this",  gameData)
    }, [])
    if(!gameQs){
      gameQ = 
      <>
        Nothing here yet
      </>
    } else {
      gameQ =
        <>
          {/* {gameData[0]} */}
        </>
    }
    return (
      <>
        hi
        {gameQ}
      </>  
    )
}

export default GameCarousel



// useEffect(() => {
//   gameShow(user, id)
//       .then((res) => {
//           setGame(res.data.game)
//       })
//       .catch((error) => {
//           msgAlert({
//               heading: 'Failure',
//               message: 'Show Game Failure' + error,
//               variant: 'danger'
//           })
//       })
// }, [])

// 5) [{…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {category: 'History', type: 'multiple', difficulty: 'medium', question: 'Which of the following battles is often considered…eginning of the fall of the Western Roman Empire?', correct_answer: 'Battle of Adrianople', …}
// 1
// : 
// {category: 'History', type: 'multiple', difficulty: 'medium', question: 'On which day did construction start on &quot;The P…ters for the United States Department of Defense?', correct_answer: 'September 11, 1941', …}
// 2
// : 
// {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In Call of Duty: United Offensive, what two soldiers share a name of a video game character?', correct_answer: 'Gordon &amp; Freeman', …}
// 3
// : 
// {category: 'Science: Computers', type: 'multiple', difficulty: 'medium', question: 'In the server hosting industry IaaS stands for...', correct_answer: 'Infrastructure as a Service', …}
// 4
// : 
// {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'How many sets of grandmaster witcher gear are in The Witcher 3&#039;s Blood and Wine DLC?', correct_answer: '5', …}
// length
// : 
// 5