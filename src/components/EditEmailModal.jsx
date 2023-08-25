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

const EditEmailModal = ({
  openEditEmailModal,
  handleEditEmailModalClose,
  user,
  handleChange,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  const [changes, setChanges] = useState({cEmail:"", password:""});
  let token = JSON.parse(localStorage.getItem("token"));
  let id = JSON.parse(localStorage.getItem("id"));

  const handleSumbit = async(e) => {
    const data ={
      email: changes.cEmail,
      password: changes.password
    }
    const res = await updateUserPic(token, id, data);
    if(res?.data?.statusCode === 200){
      handleEditEmailModalClose()
    }
  };

  const handleChanges = (e) => {
    console.log("e",e.target.value)
    const name = e.target.name;
    changes[name] = e.target.value
    setChanges({...changes});
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
      <div className="login-page-right-container" style={{ minWidth: "200px" }}>
        <h3>Change Email</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user?.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Confirm Email"
          name="cEmail"
          value={changes.cEmail}
          onChange={(e) => handleChanges(e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={changes.password}
          onChange={(e) => handleChanges(e)}
        />
        <br />
        <br />

        <button style={{ width: "100%" }} onClick={(e) => handleSumbit(e)}>
          Change Email
        </button>
      </div>
    </Modal>
  );
};
export default EditEmailModal;
