import apiUrl from '../apiConfig'
import axios from 'axios'

export const getLeaderboard = (data) => {
    console.log(data)
    return axios({
        method: 'POST',
        data: {category: data},
        url: apiUrl + '/leaderboard'

    })
}