import "./Header.css"
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
function Headers() {
    return (
        <header className="fixed">
            <nav>
                <div className="Header">
                    <div>
                        <p className="Heading">Restaurant Landing Page</p>
                    </div>
                    <ul>
                        <li>
                            <Link to="Loding">Loding</Link>
                        </li>
                        <li>
                            <Link to="Home">Home</Link>
                        </li>
                        <li>
                            <Link to="Gallery">Gallary</Link>
                        </li>
                        <li>
                            <Link to="Shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="About">About</Link>
                        </li>
                        <li>
                            <Link to="Team">Team</Link>
                        </li>
                        <li>
                            <Link to="Contact">Contact</Link>
                        </li>

                        <li>
                            <Link to="Contact"> <AiOutlineShoppingCart />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Headers
