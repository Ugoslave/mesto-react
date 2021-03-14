import closeButton from '../images/popup-closeButton.svg';

function ImagePopup(props) {
  console.log(props.card);
  return (
  <div className={`popup popup_place_image-popup ${props.card && ('popup_active')}`}>
    <div className="popup__container popup__container_place_image-popup">
      <button type="button" className="popup__button-close popup__button-close_place_image-popup" onClick = {props.onClose}>
        <img src={closeButton} alt="Закрыть" className="popup__button-image" />
      </button>
      <figure className="popup__content-box">
        <img src = {props.card.link} alt = {props.card.name} className="popup__image" />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  </div>
  );
}

export default ImagePopup;