import React, { useState, useEffect } from "react"
import { postResult } from "../api/result"

const Result = (props) => {
    const { userID, msgAlert, category, score } = props

    const [newScore, setNewScore] = useState(null)

    useEffect(() => {
        postResult({category: category, score: score}, userID)
            .then(res => {
                setNewScore(res.data)
            })
            .catch(error => {
                msgAlert({
                    heading: 'Failure',
                    message: 'SCORE SAVE FAILURE: ' + error,
                    variant: 'danger'
                })
            })
    }, [])

    return (
        <>
            Your new "{category}" score is {newScore}!
        </>
    )
}

export default Result