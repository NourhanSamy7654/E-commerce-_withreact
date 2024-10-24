import { Link } from "react-router-dom";
import "./ProdectList.css";

function Navbar({ cartItemsCount }) {
  const logoColor = "#808b96";
  return (
    <nav
      className="navbar navbar-expand-lg bg-transparent fixed-top"
      style={{ zIndex: "999", position: "sticky" }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#2ecc71",
            fontFamily: "ALobster, cursive",
            letterSpacing: ".1rem",
          }}
        >
          Shopping
          <i
            className="fas fa-shopping-cart"
            style={{ marginRight: "8px", color: logoColor }}
          ></i>
          Now
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active "
                aria-current="page"
                to="/"
                style={{ color: "green" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart <i className="fas fa-shopping-cart"></i>
                {cartItemsCount > 0 && (
                  <span className="badge bg-danger ms-2">{cartItemsCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
