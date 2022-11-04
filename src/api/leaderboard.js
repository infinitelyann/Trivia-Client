import apiUrl from '../apiConfig'
import axios from 'axios'

export const getLeaderboard = (category) => {
    console.log(data)
    return axios({
        method: 'POST',
        data: {category: category},
        url: apiUrl + '/leaderboard'

    })
}