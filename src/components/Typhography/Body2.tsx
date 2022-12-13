import React, { ReactNode } from 'react'

interface Body2Props {
    children:ReactNode, 
    variant:'light'|'regular'|'medium'|'bold'|'black',
    color: string
}

const weights = {
    light:300,
    regular:400,
    medium:500,
    bold:700,
    black:900
}


const Body2 = ({children, variant, color}:Body2Props) => {
    return (
        <p style={{fontWeight:weights[variant], color: color}}>{children}</p>
    )
}

export default Body2