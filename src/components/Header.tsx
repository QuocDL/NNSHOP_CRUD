import {  NavLink } from 'react-router-dom';
import '../style/Header.scss';
const Header = () => {
  return (
    <div>
      <header className="header">
  <div className="container">
    <div className="header-inner">
      <div className="header_media">
        <img src="./public/Frame 168.png" alt="" />
      </div>
      <nav className="main-menu">
        <ul className="main-menu__list">
          <li className="main-menu__item">
            <NavLink className="main-menu__link" to="">
              Home
            </NavLink>
          </li>
          <li className="main-menu__item">
            <NavLink className="main-menu__link" to="shop">
              Shop
            </NavLink>
          </li>
          <li className="main-menu__item">
            <NavLink className="main-menu__link" to="admin">
              Admin
            </NavLink>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-action">
        <div className="header-action-item">
          <img src="./public/user.png" alt="" />
        </div>
        <div className="header-action-item">
          <img src="./public/search.png" alt="" />
        </div>
        <div className="header-action-item">
          <img src="./public/heart.png" alt="" />
        </div>
        <div className="header-action-item">
          <a href="./cart.html">
            <img src="./public/cart.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Header
