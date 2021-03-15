import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));

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
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info-container">
            <div className="profile__title-box">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
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
