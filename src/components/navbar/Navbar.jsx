import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const items = [
    { name: 'Shop', title: 'shop', href: '/' },
    { name: 'Men', title: 'men', href: '/men' },
    { name: 'Women', title: 'women', href: '/women' },
    { name: 'Kids', title: 'kids', href: '/kids' },
]

function Navbar() {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => { setOpen(prev => !prev) }


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <button
                className='nav-bars'
                onClick={toggleSidebar}
            >
                { open ? <IoMdClose /> : <FaBars /> }
                
            </button>
            <ul className='nav-bars-list'>
                {open && items.map((item, idx) => {
                    const { title, href, name } = item
                    return (
                        <li key={title}>
                            <a
                                onClick={toggleSidebar}
                                href={href}
                                className="nav-bars-list-el"
                            >
                                <span>{name}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="nav-menu">
                {items.map((item) => {
                    return (
                        <li onClick={() => { setMenu(item.title) }}><Link to={item.href}>{item.name}</Link>{menu === item.title ? <hr /> : <></>}</li>
                    )
                })}
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="cart icon" />
                </Link>

                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;