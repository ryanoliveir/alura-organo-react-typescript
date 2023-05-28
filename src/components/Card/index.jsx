import './Card.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Card = (props) => {
    const { imageUrl, name, collaborator, position , background, onDelete } = props;
    return (
        <div className="card-container">
            <AiFillCloseCircle 
              size="25" 
              className="delete-card" 
              onClick={ () => onDelete(collaborator.id)} 
            />
            <div className="card-header" style={{ backgroundColor: background }}>
                <img src={imageUrl} alt={name} />
            </div>
            <div className="card-footer" >
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}

export default Card;
