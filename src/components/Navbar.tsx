import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li>
          <NavLink className="navbar__a" to="/">
            Home
          </NavLink>
        </li>
        <li className="navbar__li">
          <NavLink className="navbar__a" to="/allbooks">
            Allbooks
          </NavLink>
        </li>

        <li className="navbar__li">
          <NavLink className="navbar__a" to="/about">
            About
          </NavLink>
        </li>
      </ul>

      <section
        onClick={() => {
          navigate("/");
        }}
        className="icon"
      >
        <h1>JM</h1>
      </section>
    </nav>
  );
};

export default Navbar;
