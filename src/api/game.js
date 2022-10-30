import apiUrl from "../apiConfig";
import axios from "axios";

const createGame = (data, user) => {
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

