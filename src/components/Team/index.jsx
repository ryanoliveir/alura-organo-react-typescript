import './Team.css';
import Card from '../Card'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    const { name, color, collaborators, onDelete, onColorChange } = props;

    const getColorToChange = (event) => {
        const newColor = event.target.value

        onColorChange(newColor, name);
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
                          imgUrl={collaborator.imageUrl}
                          name={collaborator.name}
                          position={collaborator.position}
                          background={color}
                          onDelete={onDelete}
                        />
                    )})
                }
            </div>
        </section>
    )
}

export default Team;

