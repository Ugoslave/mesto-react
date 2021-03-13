function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_place_avatar-update').classList.add('popup_active');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup').classList.add('popup_active');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_place_add-element').classList.add('popup_active');
  }

  return (
    <>
    <section className="profile">
        <div className="profile__info">
          <div onClick={handleEditAvatarClick} className="profile__avatar-box">
            <img src="#" alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info-container">
            <div className="profile__title-box">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button type="button" onClick={handleEditProfileClick} className="profile__edit-button" />
          </div>
        </div>
        <button type="button" onClick={handleAddPlaceClick} className="profile__add-button" />
      </section>
      <section className="cards-container">
        <ul className="elements">
          <template className="card">
            <li className="element">
              <div className="element__image-box">
                <img src="#" alt="Фото красивого места" className="element__image" />
                <button type="button" className="element__remove-button">
                  <img src="<%=require('./images/element-removeButton.svg')%>" alt="Удалить" />
                </button>
              </div>
              <div className="element__text-box">
                <h2 className="element__title"></h2>
                <div className="element__like-box">
                  <button type="button" className="element__button">
                    <img src="<%=require('./images/element-like.svg')%>" alt="Нравится" />
                  </button>
                  <p className="element__likes-number" />
                </div>
              </div>
            </li>
          </template>  
        </ul>
      </section>
  </>
  );
}

export default Main;
