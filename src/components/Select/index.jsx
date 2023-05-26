import './Select.css';

const Select = (props) => {
    const {  label, items, isRequired, value, onChanged } = props;

    return (
        <div className="select-container">
            <label> 
                {label}
            </label>
            <select value={value} onChange={event => onChanged(event.target.value)} required={isRequired} >
                <option value=''></option>
                {
                    items.map(item => {
                        return <option key={item}> {item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;
