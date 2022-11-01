import apiUrl from "../apiConfig";
import axios from "axios";

// this is the api call to create a question
export const createQuestion = (data, user) => {
    return axios({
        method: 'POST',
        url: apiUrl + 'questions',
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
        url: `${apiUrl}/questions/${updatedQuestion._id}`,
        method:'PATCH',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
        data: { question: updatedQuestion}
    })
}

