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
                    items.map((item, index)=> {
                        return <option key={index}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;
