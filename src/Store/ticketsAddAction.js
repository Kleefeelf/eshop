import { ADD_TICKET } from "./ticketsActions"

export const addTickets = (ticket) => {
    return {
        type: ADD_TICKET,
        ticket: ticket
    }
}

