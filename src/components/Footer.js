import "./Footer.css"
import img from "./assest/top-view-food-frame-with-copy-space.jpg"

function Footer() {
    return (
        <>
            <div className="imgs slide-top">
                <div className="imge">
                </div>


                <div className="img_1">
                    <div className="weekend">

                        <h1>Hours of Operation</h1>
                        <p>MON – FRI</p>
                        <p>10:00am – 1:00pm</p>
                        <p>4:00pm – 10:30pm</p>
                    </div>
                    <div className="sat">
                        <h1>SAT</h1>
                        <p>3:00pm – 10:30pm</p>

                    </div>
                    <div className="sun">
                        <h1>SUN</h1>
                        <p>We are closed</p>
                    </div>

                    <span>

                        <button className="btn_footer"> MAKE RESEVATION</button>
                    </span>

                </div>
                <div className="img_1">
                    <div className="query">
                        <div className="query_1">
                            <h1>Drop Us a Line</h1>
                            <p>Don’t be shy. Let us know if you have any questions!</p>
                            <span>  <button className="btn_footer">CONTACT US</button></span>
                        </div>
                        <div className="form">

                            <h1>Our Newsletter</h1>
                            <p>Dialogue is an essential part of any script</p>

                            <form className="form-1">
                                <input type="text" placeholder="First-Name" />
                                <input type="text" placeholder="Last-Name" />
                                <input type="email" placeholder="Email" />
                                <button className="btn_footer">CONTACT US</button>
                            </form>
                        </div>
                    </div>



                </div>
            </div>


        </>
    )
}

export default Footer
