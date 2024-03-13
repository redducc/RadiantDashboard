import React from 'react'

const Button = ({ title, click, width }) => {
    return (
        <button
            style={{
                width: width ? width : 'auto',
                borderRadius: '12px',
                backgroundColor: '#18077F',
                padding: '13px 60px',
                fontSize: '16px',
                color: '#fff',
                fontWeight: '700'
            }}
            onClick={click && click}
        >
            {title}
        </button>
    )
}

export default Button
