import { BUY_TICKET, DELETE_TICKET, SET_LOGGED_FALSE, SET_LOGGED_TRUE, DELETE_ALL } from "./ticketsActions";

const defaultState = {
    tickets: [], //{name: "", price: 0, qty: 0},
    logged: false
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case BUY_TICKET: return {
            ...state,
            tickets: [...state.tickets, action.ticket ], //action.ticket
        }
        case DELETE_TICKET: return {
            ...state,
            tickets: state.tickets.filter((ticket, index) => index !== action.ticket)
        }
        case DELETE_ALL: return {
            ...state,
            tickets: []
        }
        case SET_LOGGED_TRUE: return {
            ...state,
            logged: action.logged
        }
        case SET_LOGGED_FALSE: return {
            ...state,
            logged: action.logged
        }        
        default: return state
    }
}

export default reducer