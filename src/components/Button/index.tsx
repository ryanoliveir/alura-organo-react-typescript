import './Button.css';
import { ReactElement } from 'react';

interface ButtonProps {
    children: ReactElement | string

}

const Button = (props : ButtonProps) => {
    const { children } = props;
    return (
        <button className="button-form">
            {children}
        </button>
    )
}

export default Button;

