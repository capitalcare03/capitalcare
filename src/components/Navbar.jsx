import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './smallComponents/Hamburger';
import logo from "../images/logo.png";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
 
    const updateLink = (value) => {
        setActive(value);
        setToggle(!toggle);
    }

    return (
        <div className={scrolled ? "navbar scrolled" : "navbar"}>
            <nav className="flex items-center w-full justify-between">
                <img src={logo} alt="Logo" className={scrolled ? "" : "w-1/3"} />
                <div className='hamburger' onClick={() => setToggle(!toggle)}>
                    <Hamburger toggle={toggle} />
                </div>

                <ul className={toggle ? "flex justify-between w-1/3 toggle" : "flex justify-between w-1/3"}>
                    <li className={toggle ? "toggle__li" : ""}>
                        <NavLink onClick={() => updateLink("home")} style={(isActive) => { return { color: active === "home" ? "#164A9F" : "", } }} to="/">
                            Home 
                        </NavLink>
                    </li>
                    <li className={toggle ? "toggle__li" : ""}>
                        <NavLink onClick={() => updateLink("about")} style={(isActive) => { return { color: active === "about" ? "#164A9F" : "", } }} to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className={toggle ? "toggle__li" : ""}>
                        <NavLink onClick={() => updateLink("services")} style={(isActive) => { return { color: active === "services" ? "#164A9F" : "" } }} to="/services">Services
                        </NavLink>
                    </li>
                    <li className={toggle ? "toggle__li" : ""}>
                        <NavLink onClick={() => updateLink("billing")} style={(isActive) => { return { color: active === "billing" ? "#164A9F" : "" } }} to="/billing">
                            Billing
                        </NavLink>
                    </li>
                    <li className={toggle ? "toggle__li" : ""}>
                        <NavLink onClick={() => updateLink("profile")} style={(isActive) => { return { color: active === "profile" ? "#164A9F" : "" } }} to="/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li className={toggle ? "toggle__li" : ""}>
                        <NavLink onClick={() => updateLink("contact")} style={(isActive) => { return { color: active === "contact" ? "#164A9F" : "" } }} to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar