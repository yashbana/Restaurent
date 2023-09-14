import Ratting from "../container/Ratting"
import images from "./assest/stars.png"

import './Section5.css'

function Section5() {
    return (
        <>
            <div className="section3 backblack">
                <div className="">
                    <p className="sec_story2" >TESTIMONIALS
                    </p>
                </div>
                <h1> What People are Saying</h1>
                <div className="ratting">
                    <div className="ratting_1">
                        <Ratting Doler={images} Heading="“A Great Find”" para="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta.“" />
                    </div>
                    <div className="ratting_1">
                        <Ratting Doler={images} Heading="“Fabulous food & flawless service”" para="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta.“" />
                    </div>
                    <div className="ratting_1">
                        <Ratting Doler={images} Heading="“Another successful experience”" para="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta.“" />
                    </div>
                    <div className="ratting_1">
                        <Ratting Doler={images} Heading="“Speechless”" para="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta.“" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5
