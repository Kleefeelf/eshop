import react from 'react'

function ErrorMsg (props) {
    return (
        <div className="error"> {props.msg} </div>
    )
}

export default ErrorMsg