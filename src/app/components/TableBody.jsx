import React, { useState } from "react";
import _ from "lodash";
import PopUp from "./PopUp";

const TableBody = ({ usersResponse, columns }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSelectedUser, SetIsSelectedUser] = useState([]);

  const getCompoundName = (path, user) =>
    path.reduce((acc, item) => acc + _.get(user, item, "") + " ", "");

  const handleOpenPopup = (id) => {
    setIsPopupVisible(true);
    document.body.style.overflow = "hidden";
    SetIsSelectedUser(usersResponse.find((user) => user.id === id));
  };

  const handleClosePopup = (e) => {
    if (e.target.classList.contains("overlay")) {
      setIsPopupVisible(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <PopUp
        handleClosePopup={handleClosePopup}
        isPopupVisible={isPopupVisible}
        isSelectedUser={isSelectedUser}
      />

      {usersResponse.map((user) => (
        <tr key={user.id} onClick={() => handleOpenPopup(user.id)}>
          {Object.keys(columns).map((column) => {
            return (
              <td key={column}>
                {Array.isArray(columns[column].path)
                  ? getCompoundName(columns[column].path, user)
                  : _.get(user, columns[column].path, "-")}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
};

export default TableBody;
