import './Input.css';

const Input = (props) => {
    const { type = 'text', value, label, placeholder, isRequired } = props;


    const onTyped = (event) => {
        props.onChanged(event.target.value);
    }


    return (
        <div className={`input-field field-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type} 
                value={value} 
                onChange={onTyped} 
                required={isRequired} 
                placeholder={placeholder}/>
        </div>
    )

}

export default Input;