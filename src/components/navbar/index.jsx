import { Link } from "react-router-dom"
import './index.css'
import { assets } from "../../assets/assets"
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <Link to="/" className="link-active">Home</Link> 
          <Link to="/"  className="link-active">Menu</Link> 
          <Link to="/"  className="link-active">Product</Link> 
          <Link to="/"  className="link-active"> About Us</Link> 
          <Link to="/" className="link-active"> Contact Us</Link> 
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="" className="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" className="" />
            <div className="dot"></div>
          </div>
          <button> Sign in</button>
        </div>
      </div>
    </>
  )
}