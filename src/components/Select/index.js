import './Select.css';

const Select = (props) => {
    const { label, items, isRequired } = props;
    return (
        <div className="select-container">
            <label> 
                {label}
            </label>
            <select required={isRequired}>
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
