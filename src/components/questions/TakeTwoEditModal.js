import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { Container, Card, Button } from "react-bootstrap"
import TakeTwoEditForm from './TakeTwoEditForm'

const TakeTwoEditModal = (props) => {
    const { user, show, game, handleClose, msgAlert, triggerRefresh, question } = props

    console.log("take two")
    
    return (
        <TakeTwoEditForm 
            question={ question }
        />

    )
    
}


export default TakeTwoEditModal