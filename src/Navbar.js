import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-bar">
                <h3 className='nav-logo'>BenzShop</h3>
                <div className="cart">
                    <FaShoppingCart className='cart-icon' />
                    <p className='total-amount'>4</p>
                </div>
            </div>

        </nav>
    )
}

export default Navbar