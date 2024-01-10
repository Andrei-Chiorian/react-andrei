import React from 'react'
import './LayoutBtn.css'

function LayoutBtn({children, onClick}) {
    return(
        <>
            <button className='layout-btn' onClick={onClick}>
                {children}            
            </button>
        </>
        
    )
}
export default LayoutBtn;

