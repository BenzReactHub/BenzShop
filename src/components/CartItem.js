import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const CartItem = ({ id, img, title, price, amount }) => {
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={() => { console.log('清除商品: ', id) }}>清除商品</button>
            {/* 添加減少與當前商品數量 */}
            <div className='cart-item-amount'>
                <button className='amount-btn' onClick={() => { console.log('添加商品數量') }}><FaArrowUp /></button>
                <p className="amount">{amount}</p>
                <button className='amount-btn' onClick={() => { console.log('減少商品數量') }}><FaArrowDown /></button>
            </div>
        </article>
    )
}

export default CartItem