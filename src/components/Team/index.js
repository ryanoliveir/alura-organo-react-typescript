import './Team.css';
import Card from '../Card'

const Team = (props) => {
    const { name, primaryColor, secondaryColor, collaborators } = props;

    return (

        (collaborators.length > 0) && <section className="team-container" style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderColor: primaryColor }}> {name} </h3>
            <div className='cards'>
                { collaborators.map(collaborator => {
                    return (
                        <Card 
                          key={collaborator.name}
                          imgUrl={collaborator.imageUrl}
                          name={collaborator.name}
                          position={collaborator.position}
                          background={primaryColor}
                        />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team;

