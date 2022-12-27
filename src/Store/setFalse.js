import { SET_LOGGED_FALSE } from "./ticketsActions"

const setFalse = () => {
    return {
        type: SET_LOGGED_FALSE,
        logged: false
    }
}

export default setFalse