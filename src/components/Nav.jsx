import { Link } from "react-router-dom"

function Nav () {

    return (
        <nav className="nav">
            <div className="navbar-left">Circus liquor</div>
            <div className="navbar-right">
                <Link to="/">Home</Link>
                <Link to="/smokeshop">SmokeShop</Link>
                <a href="#">Location</a>
             </div>
        </nav>
    )
}
export default Nav