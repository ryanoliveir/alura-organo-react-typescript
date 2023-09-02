import React from 'react';
import './Input.css';

interface InputProps {
    onChanged: (value: string) => void;
    placeholder: string
    type?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
    label: string
    isRequired?: boolean
    value: string
}

const Input = ({ type = 'text', value, label, placeholder, onChanged, isRequired = false }:InputProps ) => {



    const onTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChanged(event.target.value);
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