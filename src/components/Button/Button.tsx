import { PropsWithChildren } from "react"
import './Button.css'

interface IButton extends PropsWithChildren {
    handleClick?: () => void
    type?: "button" | "submit" | "reset" | undefined
}


const Button = ({handleClick, children, type}: IButton) => {
    return (
        <button className="button" type={type} onClick={handleClick}>{children}</button>
    )
}

export default Button