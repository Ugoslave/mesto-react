import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddPlacePopup({isOpen, onClose}) {

  return (
    <PopupWithForm
        name="add-element"
        title="Новое место"
        buttonText="Создать"
        isOpen={isOpen}
        onClose={onClose}
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
  );
}

export default AddPlacePopup;
