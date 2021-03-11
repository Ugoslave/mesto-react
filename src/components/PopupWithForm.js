function PopupWithForm(props) {
  return (
  <div className={`popup popup_${props.name}`}>
    <div className="popup__container">
      <button type="button" className="popup__button-close">
        <img src="<%=require('./images/popup-closeButton.svg')%>" alt="Закрыть" className="popup__button-image" />
      </button>
      <div className="popup__form-box">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form name="userData" className="popup__form" novalidate>
          <input 
            required 
            type="text" 
            name="name" 
            placeholder="Имя" 
            minlength="2" 
            maxlength="40" 
            id="name-card" 
            className="popup__input popup__input_data_name" />
          <span id="name-card-error" className="popup__input-error" />
          <input 
            required 
            type="text" 
            name="about" 
            placeholder="О себе" 
            minlength="2" 
            maxlength="200" 
            id="about-card" 
            className="popup__input popup__input_data_about-yourself" />
          <span id="about-card-error" className="popup__input-error" />
          <button type="submit" className="popup__button-save">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default PopupWithForm;
