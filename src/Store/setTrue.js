import { SET_LOGGED_TRUE } from "./ticketsActions"

const setTrue = () => {
    return {
        type: SET_LOGGED_TRUE,
        logged: true
    }
}

export default setTrue