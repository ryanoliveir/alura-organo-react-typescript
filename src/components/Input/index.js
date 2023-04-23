import './Input.css';

const Input = (props) => {
    const { label, placeholder } = props;
    return (
        <div className="input-field">
            <label>
                {label}
            </label>
            <input placeholder={placeholder}/>
        </div>
    )

}

export default Input;