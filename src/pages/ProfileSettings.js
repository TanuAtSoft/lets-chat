import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatIcon from "../components/ChatIcon";
import EditIcon from "../components/EditIcon";
import CamIcon from "../components/CamIcon";
import PasswordChangeModal from "../components/PasswordChangeModal";
import EditEmailModal from "../components/EditEmailModal";
import EditNameModal from "../components/EditNameModal";
import { getUser } from "../apis/users/getUser";
import { uploadImgs } from "../apis/upload/uploadImgs";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openEditEmailModal, setOpenEditEmailModal] = useState(false);
  const [openEditNameModal, setOpenEditNameModal] = useState(false);
  let token = JSON.parse(localStorage.getItem("token"));
  let id = JSON.parse(localStorage.getItem("id"));
  console.log("id", id);
  const [file, setFile] = useState();
  const [imgPreview, setImgPreview] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const callUserDetails = async () => {
      const res = await getUser(token, id);
      if (res?.data?.statusCode === 200) {
        setUser(res?.data?.data);
      }

      console.log("res", res?.data?.data);
    };
    if (id) {
      callUserDetails();
    }
  }, []);

  const handlePasswordModalClose = () => {
    setOpenPasswordModal(false);
  };
  const handleEditEmailModalClose = () => {
    setOpenEditEmailModal(false);
  };

  const handleEditNameModalClose = () => {
    setOpenEditNameModal(false);
  };

  const handleFile = async (event) => {
    let file = event.target.files[0];
    if (file) {
      setFile(file);
      const tempUrl = URL.createObjectURL(event.target.files[0]);
      setImgPreview(tempUrl);
    }
  };

  const handleSave =async()=>{
    if(!file){
      alert("select image to save as your profile picture")
    }
    else{
      const formData = new FormData();
      formData.append("images", file);
      const uploadedRes = await uploadImgs(formData);
      if (uploadedRes.status) {
        console.log("uploadedRes",uploadedRes.status)
      }
      if (!uploadedRes.status) {
        alert(uploadedRes.statusMessage);
        return;
      }
    }
  }
  return (
    <Fragment>
      <div className="header">
        <div className="profile-icon" onClick={() => navigate("/dashboard")}>
          {" "}
          <ChatIcon />
        </div>
      </div>
      <div className="container">
        <div
          className="inner-container sideBar-container"
          style={{ width: "90%" }}
        >
          <div className="sidebar-text">
            <br />
            <div className="settings-inner-img-div">
              {!file && <img
                src={user?.profilePicture ? user?.profilePicture :"https://tse2.mm.bing.net/th?id=OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt&pid=Api&P=0&h=180"}
                alt="img profile"
              />}
              {file && <img
                src={imgPreview}
                alt="img profile"
              />}
              <div className="plus-icon cam-icon">
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => handleFile(e)}
                />
                <label htmlFor="file">
                  <span className="fa fa-edit edit-icon">
                    <CamIcon />
                  </span>
                </label>
              </div>
            </div>
            <br />
            <div className="settings-inner-div">
              <p>
                <strong>Display Name:</strong>
              </p>
              <div className="justify">
              {user &&  <p>{user.firstname}{' '} {user.lastname}</p>}
                <div onClick={() => setOpenEditNameModal(true)}>
                  <EditIcon />
                </div>
              </div>
            </div>
            <br />
            <div className="settings-inner-div">
              <p>
                <strong>Email:</strong>
              </p>
              <div className="justify">
              {user &&  <p>{user.email}</p>}
                <div onClick={() => setOpenEditEmailModal(true)}>
                  <EditIcon />
                </div>
              </div>
            </div>
            <br />
            <div className="settings-inner-div">
              <div className="justify">
                <strong>Password</strong>
                <div onClick={() => setOpenPasswordModal(true)}>
                  <EditIcon />
                </div>
              </div>
            </div>
          </div>
          {file && <div className="save-btn"><button onClick={handleSave}>Save</button></div>}
        </div>
      </div>
      <PasswordChangeModal
        openPasswordModal={openPasswordModal}
        handlePasswordModalClose={handlePasswordModalClose}
      />
      <EditEmailModal
        openEditEmailModal={openEditEmailModal}
        handleEditEmailModalClose={handleEditEmailModalClose}
      />
      <EditNameModal
        openEditNameModal={openEditNameModal}
        handleEditNameModalClose={handleEditNameModalClose}
      />
    </Fragment>
  );
};
export default ProfileSettings;
