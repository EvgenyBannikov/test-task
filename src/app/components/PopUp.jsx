import React from "react";

const PopUp = ({ handleClosePopup, isPopupVisible, isSelectedUser }) => {
  return (
    <>
      <div>
        {isPopupVisible && (
          <div className="overlay" onClick={handleClosePopup}>
            <div className="form">
              <p>Фамилия: {isSelectedUser.lastName}</p>
              <p>Имя: {isSelectedUser.firstName}</p>
              <p>
                Отчество:
                {isSelectedUser.maidenName !== ""
                  ? " " + isSelectedUser.maidenName
                  : " -"}
              </p>
              <p>Возраст: {isSelectedUser.age}</p>
              <p>
                Адрес:
                {" " +
                  isSelectedUser.address.city +
                  " " +
                  isSelectedUser.address.address}
              </p>
              <p>Рост: {isSelectedUser.height}</p>
              <p>Вес: {isSelectedUser.weight}</p>
              <p>Телефон: {isSelectedUser.phone}</p>
              <p>Телефон: {isSelectedUser.email}</p>
              <p className="hint">
                Нажмите на затемнённую область экрана для закрытия окна
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PopUp;
