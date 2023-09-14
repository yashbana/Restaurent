function Ratting(props) {
    return (
        <>
            <div className="rate">
                <img src={props.Doler} alt="abc" />
                <h1>{props.Heading}</h1>
                <p className="ratting_p">{props.para} </p>
            </div>
        </>
    )
}

export default Ratting
