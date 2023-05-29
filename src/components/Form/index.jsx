import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import './Form.css'


const Form = (props) => {
    const { teams, onSubmit, onRegisterTeam } = props;
    
    const [ name, setName ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ imageUrl, setImageUrl ] = useState('');
    const [ team, setTeam ] = useState('');

    const [ teamName, setTeamName ] = useState('');
    const [ teamColor, setTeamColor ] = useState('');

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
                <h1>Preencha os dados para criar o card do colaborador</h1>
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
                    isRequired={true}
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

            <form onSubmit={(event) => {
                event.preventDefault();
                onRegisterTeam({teamName: teamName, color: teamColor});
            }}>
                <h1>Preencha os dados para criar um novo time</h1>
                <Input 
                    label="Nome do time" 
                    placeholder="Digite o nome do time" 
                    isRequired={true} 
                    value={teamName}
                    onChanged={value => setTeamName(value)}
                />
                <Input 
                    label="Cor do time" 
                    placeholder="Digite a cor do time" 
                    isRequired={true}
                    value={teamColor}
                    onChanged={value => setTeamColor(value)}
                />
                <Button>
                    Criar time
                </Button>
            </form>
        </section>
    )
}

export default Form;
