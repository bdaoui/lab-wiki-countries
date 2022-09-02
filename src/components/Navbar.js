import {Link} from "react-router-dom";


const Navbar = () =>{


    return(
        <ul style={{display: "flex", justifyContent: "center", padding:"1vw", backgroundColor: "black"}}>
            <li style={{ listStyle: "none"}}>
                <Link to="/" >Countries</Link>
            </li> 
        
        </ul>
    )
}


export default Navbar;