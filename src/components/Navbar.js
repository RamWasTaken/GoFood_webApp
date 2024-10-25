import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Track if the navbar should hide

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down 100px or more, hide the navbar
      if (window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-black position-sticky ${isHidden ? 'navbar-hidden' : ''}`}
        style={{
          transition: "opacity 0.5s ease, visibility 0.5s ease", // Smooth transition for hiding
          opacity: isHidden ? '0.8' : '1', // Become slightly transparent when scrolled
          visibility: isHidden ? 'visible' : 'visible',
          backgroundColor: "black",
          boxShadow: "0px 4px 2px -2px gray", // Add shadow for a modern effect
          position: "fixed",
          zIndex: "10",
          width: "100%",
        }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic text-white" to="/">Foods</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 text-white active" aria-current="page" to="/">Home</Link>
              </li>
              {localStorage.getItem("token") && (
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 text-white active" aria-current="page" to="/myorder">My Orders</Link>
                </li>
              )}
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn bg-white text-dark mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-dark mx-1" to="/signup">Signup</Link>
              </form>
            ) : (
              <div>
                <div className="btn bg-white text-dark mx-2" onClick={loadCart}>
                  <Badge color="secondary" badgeContent={items.length} overlap="rectangular">
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>
                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                <button onClick={handleLogout} className="btn bg-white text-dark">Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
