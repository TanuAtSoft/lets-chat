import Modal from "react-modal";
import CrossIcon from "./CrossIcon";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

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

const EditEmailModal = ({
    openEditEmailModal,
    handleEditEmailModalClose
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  const [user, setUser] = useState({email:"", cEmail: "",password:"" });

  const handleChange = (e) => {
    const name = e.target.name;
    user[name] = e.target.value;
    setUser({ ...user });
  };
  const handleSumbit = (e) => {
    console.log("user", user);
  };
  return (
    <Modal
      isOpen={openEditEmailModal}
      ariaHideApp={false}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleEditEmailModalClose}
      style={isTabletOrMobile ? mobileCustomStyles : DesktopCustomStyles}
      contentLabel="Example Modal"
    >
      <div onClick={handleEditEmailModalClose}>
        <CrossIcon />
      </div>
      <div className="login-page-right-container" style={{minWidth:"200px"}}>
        <h3>Change Email</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Confirm Email"
          name="cEmail"
          value={user.cEmail}
          onChange={(e) => handleChange(e)}
        />
        <br/>
        <br/>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <br/>
        <br/>
       
       
        <button style={{ width: "100%" }} onClick={(e) => handleSumbit(e)}>
          Change Email
        </button>
      </div>
    </Modal>
  );
};
export default EditEmailModal;
