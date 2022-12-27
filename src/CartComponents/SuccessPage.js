import react from 'react'
import { Link } from 'react-router-dom'

import Footer from '../HomeComponents/Footer'
import Nav from '../HomeComponents/Navbar'
import '../style/success.css'

function SuccessPage() {
    return (
        <div>
            <Nav />
            <div className="success">
                <h1>Thanks for being with us</h1>
                <div className="successfull-wrapper">
                    <div className="checkmark">&#x2714;</div>
                    <div className="text">Success</div>
                </div>
                <Link to="/catalog" className="back-to">Go back to catalog</Link>
            </div>
            <Footer />
        </div>
    )
}

export default SuccessPage