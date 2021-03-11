import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
<>
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
  <div className="popup">
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
  <div className="popup popup_content_add-element">
    <div className="popup__container popup__container_place_add-element">
      <button type="button" className="popup__button-close popup__button-close_place_add-element">
        <img src="<%=require('./images/popup-closeButton.svg')%>" alt="Закрыть" className="popup__button-image" />
      </button>
      <div className="popup__form-box popup__form-box_place_add-element">
        <h2 className="popup__title popup__title_place_add-element">Новое место</h2>
        <form name="NewElement" className="popup__form popup__form_place_add-element" novalidate>
          <input 
            required 
            type="text" 
            name="name" 
            placeholder = "Название" 
            minlength="2" 
            maxlength="30" 
            id="title-card" 
            className="popup__input popup__input_data_title" />
          <span id="title-card-error" className="popup__input-error" />
          <input 
            required 
            type="url" 
            name="link" 
            placeholder = "Ссылка на картинку" 
            id="link-card" 
            className="popup__input popup__input_data_link" />
          <span id="link-card-error" className="popup__input-error" />
          <button type="submit" className="popup__button-save popup__button-save_place_add-element">Создать</button>
        </form>
      </div>
    </div>
  </div>
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
  <div className="popup popup_place_remove-confirmation">
    <div className="popup__container popup__container_place_remove-confirmation">
      <button type="button" className="popup__button-close popup__button-close_place_remove-confirmation">
        <img src="<%=require('./images/popup-closeButton.svg')%>" alt="Закрыть" className="popup__button-image" />
      </button>
      <div className="popup__form-box popup__form-box_place_remove-confirmation">
        <h2 className="popup__title popup__title_place_remove-confirmation">Вы уверены?</h2>
        <form name="NewElement" className="popup__form popup__form_place_remove-confirmation" novalidate>
          <button type="submit" className="popup__button-save popup__button-save_place_remove-confirmation">Да</button>
        </form>
      </div>
    </div>
  </div>
  <div className="popup popup_content_avatar-update">
    <div className="popup__container popup__container_place_avatar-update">
      <button type="button" className="popup__button-close popup__button-close_place_avatar-update">
        <img src="<%=require('./images/popup-closeButton.svg')%>" alt="Закрыть" className="popup__button-image" />
      </button>
      <div className="popup__form-box popup__form-box_place_avatar-update">
        <h2 className="popup__title popup__title_place_avatar-update">Обновить аватар</h2>
        <form name="NewAvatar" className="popup__form popup__form_place_avatar-update" novalidate>
          <input 
            required 
            type="url" 
            name="avatar" 
            placeholder = "Ссылка на картинку" 
            id="link-avatar" 
            className="popup__input popup__input_data_link" />
          <span id="link-avatar-error" className="popup__input-error" />
          <button type="submit" className="popup__button-save popup__button-save_place_avatar-update">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</>
  );
}

export default App;
