import removeButton from '../images/element-removeButton.svg';
import likeButton from '../images/element-like.svg';

function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
    <div className="element__image-box">
      <img 
        src = {props.card.link} 
        alt={props.card.name} 
        className="element__image" 
        onClick = {handleClick} 
      />
      <button type="button" className="element__remove-button">
        <img src={removeButton} alt="Удалить" />
      </button>
    </div>
    <div className="element__text-box">
      <h2 className="element__title">{props.card.name}</h2>
      <div className="element__like-box">
        <button type="button" className="element__button">
          <img src={likeButton} alt="Нравится" />
        </button>
        <p className="element__likes-number">{props.card.likes.length}</p>
      </div>
    </div>
  </li>
  );
}

export default Card;
