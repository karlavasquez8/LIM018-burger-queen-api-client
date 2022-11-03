import React from "react"
import "./Button.css"
export const MenuButton = (props) => {

    return (
        <button
            type='button'
            className={`btn-menu ${props.bg}`}
            onClick={props.whenClick}
        > {props.title} </button>
    )
}
