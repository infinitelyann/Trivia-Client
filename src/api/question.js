import apiUrl from "../apiConfig";
import axios from "axios";

// this is the api call to create a question
export const createQuestion = (user, gameId, data) => {
    console.log(user)
    console.log(data,"data here")
    console.log("hello")
    return axios({
        method: 'POST',
        url: apiUrl + '/questions/' + gameId,
        data: {
            question: data
        },
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// this is the api call to update a question
export const updateQuestion = (user, gameId, updatedQuestion) => {
    return axios({
        method:'PATCH',
        url: `${apiUrl}/questions/${gameId}/${updatedQuestion._id}`,

        data: { question: updatedQuestion}
    })
}

// this is the api call to delete a question
export const deleteQuestion = ( gameId, questionId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/questions/${gameId}/${questionId}`,

    })
}