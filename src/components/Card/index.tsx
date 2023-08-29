import './Card.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Collaborator } from '@interfaces/Collaborator'

interface CardProps {
    name: string
    imageUrl: string
    collaborator: Collaborator
    position: string
    background: string
    onDelete: (id: string) => void
    onFavorite: (id: string) => void
    

}

const Card = ({ imageUrl, name, collaborator, position , background, onDelete, onFavorite }: CardProps) => {


    function favoriteHandler(){
        onFavorite(collaborator.id);
    }

    const favoritePropsComponents = {
        size: 24,
        onClick: favoriteHandler
    }

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
