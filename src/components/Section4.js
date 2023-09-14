import Extra from "../container/Extra"
import "./Section4.css"
import images from './assest/vege@2.jpg'

function Section4() {
    return (
        <>
            <div className="section4">
                <div className="sec_A">
                    <Extra Dolar="$26.95" Heading="Grilled Fillet" para="Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." />
                    <img className="sec4_img" src={images} alt="" />
                    <Extra Dolar="$53.3" Heading="Chicken Breast" para="Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." />
                </div>

                <div className="sec_A">
                    <img className="sec4_img" src={images} alt="" />
                    <Extra Dolar="$40.5" Heading="King Crab" para="Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." />
                    <img className="sec4_img" src={images} alt="" />
                </div>

                <div className="sec_A">
                    <Extra Dolar="$40.5" Heading="Sea Trout" para="Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." />
                    <img className="sec4_img" src={images} alt="" />
                    <Extra Dolar="$22.3" Heading="Roasted Bakra" para="Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." />
                </div>
                <div className="sec_A">
                    <img className="sec4_img" src={images} alt="" />
                    <Extra Dolar="$22.3" Heading="Roasted Bakra" para="Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." />
                    <img className="sec4_img" src={images} alt="" />

                </div>
            </div>

        </>
    )
}

export default Section4
