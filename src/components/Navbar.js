import {Link} from "react-router-dom";


const Navbar = () =>{


    return(
        <ul>
            <li>
                <Link to="/">Countries</Link>
                <Link to="/details">Details</Link>

            </li>
        </ul>
    )
}


export default Navbar;