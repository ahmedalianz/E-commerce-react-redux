import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav2() {
  const { cart } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-sm nav2">
      <div className={`container`}>
        <Link className="navbar-brand logo-block" to="/">
          <img className="logo" src="images/logo.png" alt="" />
        </Link>
        <Link className="nav-link" to="/cart">
          <i id="shopping-cart" className="fas fa-shopping-cart">
            <span id="incart-number">{cart.length}</span>
          </i>
        </Link>
      </div>
    </nav>
  );
}
