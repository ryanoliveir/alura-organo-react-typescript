import './Team.css';
import Card from '../Card'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    const { team, name, color, collaborators, onDelete, onColorChange, onFavorite } = props;
    const getColorToChange = (event) => {
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
                { collaborators.map((collaborator, index) => {
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

