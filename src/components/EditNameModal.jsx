import Modal from "react-modal";
import CrossIcon from "./CrossIcon";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { updateUserPic } from "../apis/users/updateUserPic";

const mobileCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "fit-content",
    width: "80%",
  },
};
const DesktopCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "70vh",
    width: "fit-content",
  },
};

const EditNameModal = ({
  openEditNameModal,
  handleEditNameModalClose,
  user,
  handleChange,
  handleSave,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  let token = JSON.parse(localStorage.getItem("token"));
  let id = JSON.parse(localStorage.getItem("id"));

  const handleSubmit = async () => {
    const data = {firstname: user.firstname, lastname: user.lastname}
    const res = await updateUserPic(token, id, data);
    if(res?.data?.statusCode === 200){
      handleEditNameModalClose()
    }
  };

  return (
    <Modal
      isOpen={openEditNameModal}
      ariaHideApp={false}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleEditNameModalClose}
      style={isTabletOrMobile ? mobileCustomStyles : DesktopCustomStyles}
      contentLabel="Example Modal"
    >
      <div onClick={handleEditNameModalClose}>
        <CrossIcon />
      </div>
      <div className="login-page-right-container" style={{ minWidth: "200px" }}>
        <h3>Change Display Name</h3>
        <input
          type="text"
          placeholder="Diaplay Name"
          name="firstname"
          value={user?.firstname}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Diaplay Name"
          name="lastname"
          value={user?.lastname}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button style={{ width: "100%" }} onClick={handleSubmit}>
          Change
        </button>
      </div>
    </Modal>
  );
};
export default EditNameModal;
