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

const EditNameModal = ({
    openEditNameModal,
        handleEditNameModalClose
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  const [name, setName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSumbit = (e) => {
    console.log("user", name);
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
      <div className="login-page-right-container" style={{minWidth:"200px"}}>
        <h3>Change Display Name</h3>
        <input
          type="text"
          placeholder="Diaplay Name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br/> 
        <button style={{ width: "100%" }} onClick={(e) => handleSumbit(e)}>
          Change Display Name
        </button>
      </div>
    </Modal>
  );
};
export default EditNameModal;
