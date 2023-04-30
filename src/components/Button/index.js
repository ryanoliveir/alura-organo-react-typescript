import './Button.css';

const Button = (props) => {
    const { children } = props;
    return (
        <button className="button-form">
            {children}
        </button>
    )
}

export default Button;

