import React, { useEffect, useState } from "react";
import '../style/navbar.css'
import { Link } from "react-router-dom";
import setFalse from "../Store/setFalse";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
    const [loggedIn, setLoggedIn] = useState()
    const dispatch = useDispatch()
    const logged = useSelector(state => state.logged)

    useEffect(() => {
        setLoggedIn(logged)
    }, [loggedIn, logged])


    function signOut() {
        dispatch(setFalse())
    }
    return (
        <div id="navbar">
            <nav>
                <span className="logo">BEB</span>

                {logged ?
                    <ul className="navlist">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/login" onClick={signOut}>Sign out</Link></li>
                    </ul> :

                    <ul className="navlist">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/registration">Register</Link></li>
                    </ul>


                }

            </nav>
        </div>
    )
}

export default Nav