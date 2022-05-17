import React from 'react'

export const Product = ({ name, type }) => {
    return (
        <div>
            <li type={type}>{name}</li>
        </div>
    )
}
