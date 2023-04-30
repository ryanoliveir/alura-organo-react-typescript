import './Input.css';

const Input = (props) => {
    const { label, placeholder, isRequired } = props;
    return (
        <div className="input-field">
            <label>
                {label}
            </label>
            <input required={isRequired} placeholder={placeholder}/>
        </div>
    )

}

export default Input;