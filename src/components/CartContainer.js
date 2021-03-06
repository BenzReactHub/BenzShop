import React from 'react'
import { useGlobalContext } from '../contexts/context'
import CartItem from './CartItem.js'

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext()
    // console.log(cart)
    if (cart.length === 0) {
        return (
            <section className="cart-container">
                <div className='empty-cart'>
                    <header>
                        <h2>購物車</h2>
                    </header>
                    <h4>沒有選購的商品</h4>
                </div>
            </section>
        )
    }
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
                    <span>${total}</span>
                </div>
                <button className='btn clear-btn' onClick={() => { clearCart() }}>清空購物車</button>
            </footer>
        </section>
    )
}

export default CartContainer