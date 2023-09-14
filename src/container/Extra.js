import "./extra.css"

function Extra(props) {
    return (
        <>
            <div className="container">
                <p className="cont_1">{props.Dolar}</p>
                <h1>{props.Heading}</h1>
                <p>{props.para} </p>
            </div>
        </>
    )
}

export default Extra
