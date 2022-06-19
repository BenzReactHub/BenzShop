import React from 'react'
import { useGlobalContext } from '../contexts/context.js';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const CartItem = ({ id, img, title, price, amount }) => {
    const { remove, increase, decrease } = useGlobalContext()
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={() => { remove(id) }}>清除商品</button>
            {/* 添加減少與當前商品數量 */}
            <div className='cart-item-amount'>
                <button className='amount-btn' onClick={() => { increase(id) }}><FaArrowUp /></button>
                <p className="amount">{amount}</p>
                <button className='amount-btn' onClick={() => { decrease(id) }}><FaArrowDown /></button>
            </div>
        </article>
    )
}

export default CartItem