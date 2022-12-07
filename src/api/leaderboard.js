import apiUrl from '../apiConfig'
import axios from 'axios'
// consider renaming, get in function name for a post request is counter intuitive 
export const getLeaderboard = (category) => {
    return axios({
        method: 'POST',
        data: {category: category},
        url: apiUrl + '/leaderboard'
        
    })
    // console.log(data)
    
}