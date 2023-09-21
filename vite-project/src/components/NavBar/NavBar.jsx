import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 ">
            <div className="container-fluid">
                <Link to="/" style={{width : 12 + "rem"}} className="navbar-brand"><img className="w-100 h-100" src="https://i.imgur.com/XDsnifO.png" alt="ebodega" /></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item">
                        <NavLink to="/category/vino" className="nav-link">vinos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/espumante" className="nav-link">espumantes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/bebida" className="nav-link">bebidas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link"><CartWidget /></NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
};

export default NavBar;