import apiUrl from "../apiConfig";
import axios from "axios";

// this is the api call to create a question
export const createQuestion = (data, gameId, user) => {
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
        headers: {
			Authorization: `Token token=${user.token}`,
		},
        data: { question: updatedQuestion}
    })
}

// this is the api call to delete a question
export const deleteQuestion = (user, gameId, questionId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/questions//${gameId}/${questionId}`,
		headers: {
			Authorization: `Token token=${user.token}`,
		}
    })
}