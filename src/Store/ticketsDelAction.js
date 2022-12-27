import { DELETE_TICKET } from "./ticketsActions"

export const deleteTickets = (ticket) => {
    return {
        type: DELETE_TICKET,
        ticket: ticket
    }
}

