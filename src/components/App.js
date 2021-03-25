import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setCurrentUser({
          name: res.name, 
          about: res.about, 
          avatar: res.avatar,
          id: res._id}
          );
      })
      .catch((err) => console.log(err));
  }, []); 

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser.id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
    api.putLikeElement(card._id)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  } else {
    api.deleteLikeElement(card._id)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }
} 

function handleCardDelete(card) {
  
  api.removeElement(card._id)
  .then(
    setCards((state) => state.filter((c) => c._id !== card._id)))
  .catch(err => console.log(err));
} 

  React.useEffect(() => {
    api
      .getAllCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);



  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleUpdateUser(evt) {
    api
      .changeUserData(evt)
      .then((res) => {
        setCurrentUser({
          name: res.name, 
          about: res.about,
          avatar: res.avatar,
          id: res._id 
          });
      })
      .catch((err) => console.log(err));

    closeAllPopups();
    }

    function handleUpdateAvatar(evt) {
      api
        .changeAvatar(evt)
        .then((res) => {
          setCurrentUser({
            name: res.name, 
            about: res.about,
            avatar: res.avatar,
            id: res._id 
            });
        })
        .catch((err) => console.log(err));
  
      closeAllPopups();
      }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} 
          cards = {cards} 
          onCardLike = {handleCardLike} 
          onCardDelete = {handleCardDelete}
        />
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser = {handleUpdateUser} />

      <PopupWithForm
        name="add-element"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          id="title-card"
          className="popup__input popup__input_data_title"
        />
        <span id="title-card-error" className="popup__input-error" />
        <input
          required
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          id="link-card"
          className="popup__input popup__input_data_link"
        />
        <span id="link-card-error" className="popup__input-error" />
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name="remove-confirmation"
        title="Вы уверены?"
        buttonText="Да"
      />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar = {handleUpdateAvatar} />
        
    </CurrentUserContext.Provider>
  );
}

export default App;
