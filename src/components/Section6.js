
import Event from "../container/Event"
import img1 from '../components/assest/top-view-food-frame-with-copy-space.jpg'
import img2 from '../components/assest/chicken-skewers-with-slices-sweet-peppers-dill.jpg'
import './Section6.css'
function Section6() {
    return (
        <>
            <div className="section3">
                <div className="">
                    <p className="sec_story2" >DON’T MISS
                    </p>
                </div>
                <h1> Our News And Events</h1>

                <p className="sec3_p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                </p>
                <div className="row">
                    <div className="row_1">
                        <Event img={img2} h2="Nunc Volutpat Venenatis" h1="CATEGORY" para="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..." />
                    </div>
                    <div className="row_1">
                        <Event img={img1} h2="Vestibulum Nisl Felis" h1="CATEGORY" para="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..." />
                    </div>
                    <div className="row_1">
                        <Event img={img2} h2="Proin Eu Augue Efficitur" h1="CATEGORY" para="Nullalis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..." />
                    </div>
                </div>
                <button className="button_B button_C">READ MORE</button>
            </div>

        </>
    )
}

export default Section6
