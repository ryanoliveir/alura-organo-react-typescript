import './Card.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Card = (props) => {
    const { imgUrl, name, position , background, onDelete } = props;
    console.log(background);

    return (
        <div className="card-container">
            <AiFillCloseCircle size="25" className="delete-card" onClick={onDelete} />
            <div className="card-header" style={{ backgroundColor: background }}>
                <img src={imgUrl} alt={name} />
            </div>
            <div className="card-footer" >
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}

export default Card;
