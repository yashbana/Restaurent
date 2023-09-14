import "./Event.css"

function Event(props) {
    return (
        <>
            <div className="event">
                <img src={props.img} alt="abc" />
                <h2> {props.h2}</h2>
                <h1> {props.h1}</h1>
                <p>{props.para}</p>
            </div>
        </>
    )
}

export default Event
