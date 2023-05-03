import './Card.css'

const Card = (props) => {
    const { imgUrl, name, position , background } = props;
    console.log(background);

    return (
        <div className="card-container">
            <div className="card-header" style={{ backgroundColor: background }}>
                <img src={imgUrl} alt={name} />
            </div>
            <div className="card-footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}

export default Card;
