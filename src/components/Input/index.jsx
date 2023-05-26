import './Input.css';

const Input = (props) => {
    const { value, label, placeholder, isRequired } = props;


    const onTyped = (event) => {
        props.onChanged(event.target.value);
    }


    return (
        <div className="input-field">
            <label>
                {label}
            </label>
            <input value={value} onChange={onTyped} required={isRequired} placeholder={placeholder}/>
        </div>
    )

}

export default Input;