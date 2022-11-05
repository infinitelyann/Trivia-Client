import apiUrl from '../apiConfig'
import axios from 'axios'

export const postResult = (data, user) => {
    console.log(data)
    return axios({
        method: 'PATCH',
        data: {category: data.category, score: data.score},
        url: apiUrl + '/' + user._id,
        headers: {
			Authorization: `Token token=${user.token}`,
		}

    })
}