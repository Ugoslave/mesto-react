import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
<>
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
  <PopupWithForm name = "profile" title = "Редактировать профиль" buttonText = "Сохранить">
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
  </PopupWithForm>
  
  <PopupWithForm name = "add-element" title = "Новое место" buttonText = "Создать">
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
  </PopupWithForm>

  <ImagePopup />

  <PopupWithForm name="remove-confirmation" title ="Вы уверены?" buttonText = "Да" />
  
  <PopupWithForm name="avatar-update" title ="Обновить аватар" buttonText = "Сохранить">
          <input 
            required 
            type="url" 
            name="avatar" 
            placeholder = "Ссылка на картинку" 
            id="link-avatar" 
            className="popup__input popup__input_data_link" />
          <span id="link-avatar-error" className="popup__input-error" />
  </PopupWithForm>
</>
  );
}

export default App;
