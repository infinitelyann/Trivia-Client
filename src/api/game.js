import apiUrl from "../apiConfig";
import axios from "axios";

// this is the api call to create a game
export const createGame = (data, user) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/games',
        data: {
            game: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

// this is the api call to index all games
export const gameIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/games'

    })
}

// this is the api call to show one game
export const gameShow = (user, id) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/games/' + id,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
    
}

// updating the name of the game
export const gameUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/games/' + id,
        data: {
            game: data
        },
        headers: {
			Authorization: `Token token=${user.token}`,
		}
    })
}

// deleting the whole game
export const gameDelete = (user, id) => {
    return axios({
        method: 'DELETE',
        url: apiUrl + '/games/' + id,
        headers: {
			Authorization: `Token token=${user.token}`,
		}
    })
}