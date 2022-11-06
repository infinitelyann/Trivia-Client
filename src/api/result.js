import apiUrl from '../apiConfig'
import axios from 'axios'

export const postResult = (data, userID) => {
    console.log("user ID: ",userID)
    return axios({
        method: 'PATCH',
        data: {category: data.category, score: data.score},
        url: apiUrl + '/' + userID
    })
}