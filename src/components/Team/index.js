import './Team.css';
import Card from '../Card'

const Team = (props) => {
    const { name, primaryColor, secondaryColor, collaborators, onDelete } = props;

    return (

        (collaborators.length > 0) && <section className="team-container" style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderColor: primaryColor }}> {name} </h3>
            <div className='cards'>
                { collaborators.map((collaborator, index) => {
                    return (
                        <Card 
                          key={collaborator.name}
                          imgUrl={collaborator.imageUrl}
                          name={collaborator.name}
                          position={collaborator.position}
                          background={primaryColor}
                          onDelete={onDelete}
                        />
                    )})
                }
            </div>
        </section>
    )
}

export default Team;

