import './Select.css';


interface SelectProps {
    label: string
    teamNames: Array<string>
    isRequired: boolean
    value: string
    onChanged: (value: string) => void

}

const Select = ({ label, teamNames, isRequired, value, onChanged }: SelectProps ) => {
    

    return (
        <div className="select-container">
            <label> 
                {label}
            </label>
            <select value={value} onChange={event => onChanged(event.target.value)} required={isRequired} >
                <option value=''></option>
                {
                    teamNames.map((teamName, index)=> {
                        return <option key={index}>{teamName}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;
