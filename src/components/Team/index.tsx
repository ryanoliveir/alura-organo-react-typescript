import './Team.css';
import { Collaborator } from '@interfaces/Collaborator';
import { Team } from '@interfaces/Team';
// '
import Card from '@components/Card'
import hexToRgba from 'hex-to-rgba';



interface TeamProps {
    color: string
    name: string
    collaborators: Array<Collaborator>
    team: Team
    onDelete: (id: string) => void
    onFavorite: (id: string) => void
    onColorChange: (newColor: string, id:string) => void
}


const Team = ({ team, name, color, collaborators, onDelete, onColorChange, onFavorite }: TeamProps) => {

    const getColorToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value

        onColorChange(newColor, team.id);
    }


    return (

        (collaborators.length > 0) && <section className="team-container" style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(color, '0.4') }}>
            <input 
                type="color" 
                className="color-input" 
                value={color} 
                onChange={getColorToChange}
            />
            <h3 style={{ borderColor: color }}> {name} </h3>
            <div className='cards'>
                { collaborators.map((collaborator: Collaborator, index: number) => {
                    return (
                        <Card 
                          key={collaborator.name}
                          name={collaborator.name}
                          collaborator={collaborator}
                          imageUrl={collaborator.imageUrl}
                          position={collaborator.position}
                          background={color}
                          onDelete={onDelete}
                          onFavorite={onFavorite}
                        />
                    )})
                }
            </div>
        </section>
    )
}

export default Team;

