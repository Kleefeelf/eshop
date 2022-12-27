import Nav from "./HomeComponents/Navbar"
import Footer from "./HomeComponents/Footer"
import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"

import './style/item-page.css'
import axios from "axios";
import { buyTickets } from "./Store/ticketsBuyAction"

function ItemPage(props) {
    const [film, setFilm] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:3036/catalog/${props.match.params.name}`).then((response) => { setFilm(response.data); })
    }, [])
    
    function onBuyClick() {
        dispatch(buyTickets(film[0]))
    }

    return (
        <div>
            {
                film.map(film => {
                    return (
                        <div >
                            <Nav />
                            <div className="film-description">
                                <div>
                                    <h1 className="film-detail-name">{film.name}</h1>
                                    <div className="film-detail-genre">{film.genre + ""}</div>
                                    <div className="film-detail-description">
                                        Watch on Smart TVs, Playstation, Xbox,
                                        Chromecast, Apple TV, Blu-ray players, and more.
                                    </div>
                                    <div className="film-detail-duration">
                                        {film.duration} min
                                    </div>
                                    <hr className="film-detail-br-line" />
                                    <div className="film-detail-price">{film.price} $</div>
                                </div>
                            </div>
                            <button className="film-detail-buy" onClick={() => onBuyClick()}> BUY TICKETS </button>
                            <Footer /> 
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ItemPage