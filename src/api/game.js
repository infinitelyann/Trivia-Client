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
        url: apiUrl + '/games/' + id
    })
}
