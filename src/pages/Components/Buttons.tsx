export const MenuButton = (props:any) => {
           
    return (
        <button 
        type = 'button' 
        className={`btn-menu ${props.bg}`} 
        onClick = {props.whenClick}
        > {props.title} </button>
    )
}
