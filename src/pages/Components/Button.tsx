import React from "react"
import "./Button.css"
type Type = 'primary' | 'secondary'

interface ButtonProps {
    title: string;
    type?: Type;
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {
    const { type = 'primary', onClick, title } = props
    return (
        <button
            type='button'
            className={`btn-menu ${type}`}
            onClick={onClick}
        > {title} </button>
    )
}
