import '../css/Header.css'
import { FaPhone, FaPaperPlane } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-top">

        <div className="header-contact">
          <span className="header-contact-icon">
            <FaPaperPlane/>
          </span>
          <p className="header-contact-text">info@horseclub.com</p>
        </div>

        <div className="logo">
          <img src="/images/horse.png" alt="horse club logo"/>
          <p className="logo-text">horse club</p>
        </div>

        <div className="header-contact">
          <p className="header-contact-text">+254 546 879 12</p>
          <span className="header-contact-icon">
            <FaPhone/>
          </span>
        </div>

      </div>
      <div className="header-bottom">
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item"><a href="#home" className="nav-list-item-link">home</a></li>
            <li className="nav-list-item"><a href="#about" className="nav-list-item-link">about us</a></li>
            <li className="nav-list-item"><a href="#services" className="nav-list-item-link">services</a></li>
            <li className="nav-list-item"><a href="#reasons" className="nav-list-item-link">why us</a></li>
            <li className="nav-list-item"><a href="#team" className="nav-list-item-link">team</a></li>
            <li className="nav-list-item"><a href="#blog" className="nav-list-item-link">blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
