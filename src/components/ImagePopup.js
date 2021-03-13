function ImagePopup() {
  return (
  <div className="popup popup_place_image-popup">
    <div className="popup__container popup__container_place_image-popup">
      <button type="button" className="popup__button-close popup__button-close_place_image-popup">
        <img src="<%=require('./images/popup-closeButton.svg')%>" alt="Закрыть" className="popup__button-image" />
      </button>
      <figure className="popup__content-box">
        <img src="#" alt="Фото красивого места" className="popup__image" />
        <figcaption className="popup__caption" />
      </figure>
    </div>
  </div>
  );
}

export default ImagePopup;
