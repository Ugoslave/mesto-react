import React from 'react';
import api from '../utils/Api';

function Main(props) {

  let [userName, setUserName] = React.useState();
  let [userDescription, setUserDescription] = React.useState();
  let [userAvatar, setUserAvatar] = React.useState();
  let [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
    .then(res => {
      userName = setUserName(res.name);
      userDescription = setUserDescription(res.about);
      userAvatar = setUserAvatar(res.avatar);
    }) 
    .catch(err => console.log(err));

    api.getAllCards() 
    .then(res => {
      const cardList = res.map(item => {
        return (
            <li className="element">
              <div className="element__image-box">
                <img src={`${item.link}`} alt="Фото красивого места" className="element__image" />
                <button type="button" className="element__remove-button">
                  <img src="<%=require('./images/element-removeButton.svg')%>" alt="Удалить" />
                </button>
              </div>
              <div className="element__text-box">
                <h2 className="element__title">{item.name}</h2>
                <div className="element__like-box">
                  <button type="button" className="element__button">
                    <img src="<%=require('./images/element-like.svg')%>" alt="Нравится" />
                  </button>
                  <p className="element__likes-number">{item.likes.length}</p>
                </div>
              </div>
            </li>
        )
      });

    cards = setCards(...[cardList]);
  }) 
  .catch(err => console.log(err));
  }, [userName, userDescription, userAvatar, cards]);

  return (
    <>
    <section className="profile">
        <div className="profile__info">
          <div onClick={props.onEditAvatar} className="profile__avatar-box">
            <img src={`${userAvatar}`} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info-container">
            <div className="profile__title-box">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" onClick={props.onEditProfile} className="profile__edit-button" />
          </div>
        </div>
        <button type="button" onClick={props.onAddPlace} className="profile__add-button" />
      </section>
      <section className="cards-container">
        <ul className="elements">{cards}</ul>
      </section>
  </>
  );
}

export default Main;
