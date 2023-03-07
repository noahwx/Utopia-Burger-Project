import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import Menu from "./menu";
import logo from '../logo.svg'

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div className="Nav">
        <NavLink to='/' className='logo'><img src={logo} alt=''/></NavLink>
        <div className="Navitems" ref={dropdownRef}>
            <NavLink to='/' onMouseOver={() => setMenuDropDownOpen(true)} className='Navitem'>Menu</NavLink>
            <NavLink to='/' onMouseOver={() => setMenuDropDownOpen(false)} className='Navitem'>About</NavLink>
            <NavLink to='/' onMouseOver={() => setMenuDropDownOpen(false)} className='Navitem'>Careers</NavLink>
            <NavLink to='/' onMouseOver={() => setMenuDropDownOpen(false)} className='Navitem'>Order Now</NavLink>

            {isMenuDropDownOpen && <Menu />}
        </div>
    </div>
  );
}