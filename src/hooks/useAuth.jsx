import {useContext} from 'react'
import {AuthContext} from '../contexts/Auth.jsx'

export const useCart = () => {
    const context = useContext(AuthContext);

    if(context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}