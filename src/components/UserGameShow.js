import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { gameShow } from '../api/game'


const UserGameShow = ({ user, msgAlert }) => {
    const [game, setGame] = useState(null)
    const [updated, setUpdated] = useState(false)

    const  { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        gameShow(user, id)
            .then((res) => {
                setGame(res.data.game)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Game Failure' + error,
                    variant: 'danger'
                })
            })
    }, [updated])


    return (
        <>
            hi
        </>
    )
}

export default UserGameShow