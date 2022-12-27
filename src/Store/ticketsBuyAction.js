import { BUY_TICKET } from "./ticketsActions"

export const buyTickets = (ticket) => {
    return {
        type: BUY_TICKET,
        ticket: ticket
    }
}

