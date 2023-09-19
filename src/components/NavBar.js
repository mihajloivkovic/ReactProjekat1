import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import "./NavBar.css"
function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" style={{width:'100px'}}></img>
            <h3>Poslasticarnica "Slatko carstvo"</h3>
        </Link>
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link active text-dark text-uppercase ml-5" aria-current="page" to="/">Početna</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase ml-5" to="/kontakt">Kontakt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark text-uppercase ml-5" to="/onama">O nama</Link>
            </li>
          </ul>
        </div>
    
    </nav>
    )
}
export default NavBar;