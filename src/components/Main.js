import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  
  const user = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__avatar-box">
            <img src={user.avatar} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info-container">
            <div className="profile__title-box">
              <h1 className="profile__title">{user.name}</h1>
              <p className="profile__subtitle">{user.about}</p>
            </div>
            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__add-button"
        />
      </section>
      <section className="cards-container">
        <ul className="elements">
          {cards.map((item) => {
            return (
              <Card key={item._id} card={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Main;
