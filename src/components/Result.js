import React, { useState, useEffect } from "react"
import { postResult } from "../api/result"

const Result = (props) => {
    const { user, msgAlert, category, score } = props

    const [newScore, setNewScore] = useState(null)

    useEffect(() => {
        postResult({category: category, score: score}, user)
            .then(res => {
                setNewScore(res)
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