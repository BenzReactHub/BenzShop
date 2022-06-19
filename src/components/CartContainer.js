import React from 'react'
import { useGlobalContext } from '../contexts/context'
import CartItem from './CartItem.js'

const CartContainer = () => {
    const { cart } = useGlobalContext()
    console.log(cart)
    return (
        <section className='cart-container'>
            {/* cart header */}
            <header>
                <h2>我的購物車</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item, index) => {
                    return <CartItem key={index} {...item} />
                })}
            </div>
            <hr />
            {/* cart footer */}
            <footer className='cart-footer'>
                <div className="cart-total">
                    <h4>總價 </h4>
                    <span>$0.00</span>
                </div>
                <button className='btn clear-btn' onClick={() => { console.log('清空購物車') }}>清空購物車</button>
            </footer>
        </section>
    )
}

export default CartContainer