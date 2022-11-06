import apiUrl from '../apiConfig'
import axios from 'axios'

export const postResult = (data, user) => {
    console.log('!!!!!!!!!!!!!! THIS IS THE USER from result axios: ', user)
    console.log("user ID: ",user._id)
    return axios({
        method: 'PATCH',
        data: {category: data.category, score: data.score},
        url: apiUrl + '/' + user._id,
        headers: {
			Authorization: `Token token=${user.token}`,
		}

    })
}