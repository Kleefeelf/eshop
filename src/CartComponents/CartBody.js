import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/cart.css";
import { buyTickets } from "../Store/ticketsBuyAction";
import { deleteTickets } from "../Store/ticketsDelAction";

function CartBody(props) {
  const [tickets, setTickets] = useState([]);

  const storedTickets = useSelector((state) => state.tickets);
  var sum = 0;
  var amount = 0;
  var ticketsPrice = {};
  var allTickets = [];
  const dispatch = useDispatch();
  useEffect(() => {
    setTickets(storedTickets);
  }, [tickets, storedTickets]);

  tickets.sort();
  tickets.forEach((tick) => {
    sum += tick.price;
    ticketsPrice[tick.name] = tick.price;
    allTickets[tick.name] = tick;
  });

  function find_duplicate_in_array(array) {
    const count = {};
    const result = [];

    array.forEach((item) => {
      if (count[Object.values(item)[1]]) {
        count[Object.values(item)[1]] += 1;
        return;
      }
      count[Object.values(item)[1]] = 1;
    });

    for (let prop in count) {
      if (count[prop] >= 2) {
        result.push(prop);
      }
    }

    return count;
  }
  amount = find_duplicate_in_array(tickets);
  /*{dispatch(buyTickets(allTickets[ticket]))}*/
  function handleDelete(ticket) {
    let index = tickets.indexOf(allTickets[ticket]);
    dispatch(deleteTickets(index));
  }

  return (
    <div>
      {Object.keys(amount).map((ticket) => {
        return (
          <div className="ticket-wrapper">
            <div className="ticket-name">{ticket}</div>
            <div className="add-del-wrapper">
              <button
                className="delete-ticket"
                onClick={() => handleDelete(ticket)}
              >
                -
              </button>
              <div className="tickets-amount">{amount[ticket]}</div>
              <button
                className="add-ticket"
                onClick={() => dispatch(buyTickets(allTickets[ticket]))}
              >
                +
              </button>
            </div>
            <div className="ticket-price">
              {ticketsPrice[ticket] * amount[ticket]} $
            </div>
          </div>
        );
      })}
      <div className="total-price-label">Total price: {sum} $</div>
      <div className="buttons-wrapper">
        <Link to="/catalog" className="back-button">
          <b>Back to catalog</b>
        </Link>
        <Link to="/cart/checkout" className="continue-button">
          <b>Continue</b>
        </Link>
      </div>
    </div>
  );
}

export default CartBody;
