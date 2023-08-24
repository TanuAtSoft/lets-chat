import Modal from "react-modal";
import CrossIcon from "./CrossIcon";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import {resetPasswordRequest} from "../apis/profiles/resetPasswordRequest"

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

const PasswordChangeModal = ({
  openPasswordModal,
  handlePasswordModalClose,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  const [user, setUser] = useState({oldPassword:"", newPassword: "", cNewPassword: "" });
  let token = JSON.parse(localStorage.getItem("token"));

  const handleChange = (e) => {
    const name = e.target.name;
    user[name] = e.target.value;
    setUser({ ...user });
  };
  const handleSumbit = (e) => {
    if(user.oldPassword === ""){

    }
  };
  return (
    <Modal
      isOpen={openPasswordModal}
      ariaHideApp={false}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handlePasswordModalClose}
      style={isTabletOrMobile ? mobileCustomStyles : DesktopCustomStyles}
      contentLabel="Example Modal"
    >
      <div onClick={handlePasswordModalClose}>
        <CrossIcon />
      </div>
      <div className="login-page-right-container" style={{minWidth:"200px"}}>
        <h3>Login</h3>
        <input
          type="password"
          placeholder="Old Password"
          name="oldPassword"
          value={user.oldPassword}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="New Password"
          name="newPassword"
          value={user.newPassword}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          name="cNewPassword"
          value={user.cNewPassword}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button style={{ width: "100%" }} onClick={(e) => handleSumbit(e)}>
          Change Password
        </button>
      </div>
    </Modal>
  );
};
export default PasswordChangeModal;
