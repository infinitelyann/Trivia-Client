import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { gameShow, gameDelete } from '../api/game'
import NewQuestionModal from '../components/questions/NewQuestionModal'
import EditQuestionModal from './questions/EditQuestionModal'
import ShowQuestion from './questions/ShowQuestion'


const UserGameShow = ({ user, msgAlert }) => {
    const [game, setGame] = useState(null)// YES !
    const [updated, setUpdated] = useState(false)
    const [questionModalShow, setQuestionModalShow] = useState(false)
    const showEdit = [questionModalShow, setQuestionModalShow]
    const [editModalShow, setEditModalShow]= useState(false)
    const [deleted, setDeleted] = useState(false)
    const [index, setIndex]= useState(null)
    const [questionForEdit, setQuestion] = useState(null)
    const  { id } = useParams()
    const navigate = useNavigate()

    //WS

    useEffect(() => {
        gameShow(user, id)
            .then((res) => {
                setGame(res.data.game)
                //WS
                
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Game Failure' + error,
                    variant: 'danger'
                })
            })
    }, [updated])

    useEffect(() => {
        if (index !== null){
            setQuestion(game.questions[index])
            console.log("q for edit on user game show",questionForEdit)
        }
        })

    const handleGameDelete = () => {
        
        console.log(id)
        console.log(user)
        gameDelete(user, id)
            .then(()=> {
                setDeleted(true)
                msgAlert({
                    heading: 'Success',
                    message: 'Game deleted',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Game Delete Failure' + error,
                    variant: 'danger'
                })
            })
    }
    let allQuestions//unused

    if(deleted)navigate('/user-created-games')// don't do this here at the top level of your component, add it to the handleGameDelete in a new then after the setDeleted - could even get rid of the set deleted and deleted bit entirely 
    if(!game){ // we should be able to avoid this entirely 
        return ( // do 1 return and do logic in it instead
            <>
            Nothing here
            </>
        )// fragment in here should be something else ( p tag ? ) since it has a string value, and we're not sure what element it will be in 
    }
// I HaVe NeVaR WrItTeN WhItE SpAcE sO mUcH iN mY lIfE (sarcasm/joke)

    return (// lots of bad indentation throughout 
      // WS
        <div style={{backgroundColor: '#240046', height: '100vh', paddingTop: '40px'}}>
            <Container className='cardContainer m-2' >
                
                <Card className='m-3' style={{fontWeight: '20px', padding: '10px'}}>
                    <Card.Header style={{}}>{game.name}</Card.Header>
                    <Card.Body>
                        
                        {/* {allQuestions} */}
                        <ShowQuestion 
                            user={user}
                            game={game}
                            show={setEditModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev=> !prev)}
                            handleClose = {() => setQuestionModalShow(false)}
                            setIndex={setIndex}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            key="new Question"
                            onClick={() =>setQuestionModalShow(true)}>
                                New Question
                      </Button>
                      <Button 
                      variant='danger' 
                      onClick={() => handleGameDelete()}>
                        Delete Quiz
                      </Button>
                    </Card.Footer>
                </Card>
                
            </Container>

        
           <NewQuestionModal 
                user={user}
                game={game}
                show={questionModalShow}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev=> !prev)}
                handleClose = {() => setQuestionModalShow(false)}
           /> 
           <EditQuestionModal 
                key="edit question modal"
                show = { editModalShow }
                showEdit =  {showEdit}
                msgAlert={msgAlert}
                user={user}
                game={game}
                index={index}
                triggerRefresh={() => setUpdated(prev=> !prev)}
                handleClose = {() => setEditModalShow(false)}
                questionForEdit = {questionForEdit}
            />

        </div>
    )
}

export default UserGameShow