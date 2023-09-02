import './Card.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Collaborator } from '@interfaces/Collaborator'

interface CardProps {
    id: string 
    name: string
    imageUrl: string
    collaborator: Collaborator
    position: string
    background: string
    date: string
    onDelete: (id: string) => void
    onFavorite: (id: string) => void
    

}

const Card = ({ id, imageUrl, name, collaborator, position , background, date, onDelete, onFavorite }: CardProps) => {


    function favoriteHandler(){
        onFavorite(id);
    }

    const favoritePropsComponents = {
        size: 24,
        onClick: favoriteHandler
    }

    const dateFormat = new Date(date).toLocaleDateString();
    console.log(dateFormat);

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
                <h5>{dateFormat !== 'Invalid Date' ? dateFormat : ''}</h5>
                <div className="favorite">
                    {collaborator.favorite 
                        ? <AiFillHeart {...favoritePropsComponents} /> 
                        : <AiOutlineHeart {...favoritePropsComponents}/> 
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;
