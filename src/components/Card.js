import removeButton from "../images/element-removeButton.svg";
import likeButton from "../images/element-like.svg";

function Card ({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <div className="element__image-box">
        <img
          src={card.link}
          alt={card.name}
          className="element__image"
          onClick={handleClick}
        />
        <button type="button" className="element__remove-button">
          <img src={removeButton} alt="Удалить" />
        </button>
      </div>
      <div className="element__text-box">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-box">
          <button type="button" className="element__button">
            <img src={likeButton} alt="Нравится" />
          </button>
          <p className="element__likes-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
