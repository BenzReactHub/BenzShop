import React, { createContext, useState, useContext, useReducer } from 'react'
import cartItems from '../data'
import reducer from '../reducers/reducer'

const AppContext = createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // 實現購物車功能函式
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }


    return (
        <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }