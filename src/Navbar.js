import { useGlobalContext } from './contexts/context.js';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const { amount } = useGlobalContext()
    return (
        <nav>
            <div className="nav-bar">
                <h3 className='nav-logo'>BenzShop</h3>
                <div className="cart">
                    <FaShoppingCart className='cart-icon' />
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>

        </nav>
    )
}

export default Navbar