import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import './Form.css'


const Form = (props) => {
    const { teams, onSubmit } = props;
    
    const [ name, setName ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ imageUrl, setImageUrl ] = useState('');
    const [ team, setTeam ] = useState('');

    const onSave = (event) =>{
        event.preventDefault();
        
        onSubmit({
            name,
            position,
            imageUrl,
            team,
        })

        setName('')
        setPosition('')
        setImageUrl('')
        setTeam('')

    }

    return (
        <section className="form-section">
            <form onSubmit={onSave}>
                <h1>Preencha os dados para cirar o card do colaborador</h1>
                <Input 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    isRequired={true} 
                    value={name}
                    onChanged={value => setName(value)}
                />
                <Input 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    isRequired={true}
                    value={position}
                    onChanged={value => setPosition(value)}
                />
                <Input 
                    label="Image" 
                    placeholder="Informe o endereço da imagem" 
                    resquired={true}
                    value={imageUrl}
                    onChanged={ value => setImageUrl(value)}

                />
                <Select 
                    label="Times" 
                    items={teams} 
                    isRequired={true}
                    value={team} 
                    onChanged={value => setTeam(value)}
                />
                
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;
