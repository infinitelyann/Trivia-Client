import apiUrl from '../apiConfig'
import axios from 'axios'

export const getLeaderboard = (category) => {
    return axios({
        method: 'POST',
        data: {category: category},
        url: apiUrl + '/leaderboard'
        
    })
    // console.log(data)
    
}