import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="NoList">Black&White</h1>
      </Link>
      <ul className="NoList">
        <li>
          <NavLink to={`/categoria/1`}>Sacos</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/2`} >Camisas</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar