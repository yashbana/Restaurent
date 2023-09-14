import vegetable from "./assest/vege@2.jpg"
import "./Section2.css"

function Section2() {
    return (
        <div className="Section2">
            <div className="section_heading">

                <p className="sec_story">OUR STORY</p>
                <h1>    WelCome To Royal   </h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            </div>


            <div className="section2_img">
                <img src={vegetable} alt="Vegetable" />
            </div>
        </div>
    )
}

export default Section2
