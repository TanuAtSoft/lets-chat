import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../apis/users/getUser";

const SingleUser = ({ item,onlineUsers }) => {
  const [user, setUser] = useState();
  const [userDetails, setUserDetails] = useState();
  let token = JSON.parse(localStorage.getItem("token"));
  let id = JSON.parse(localStorage.getItem("id"));
  const checkOnlineStatus =(id)=>{
   return onlineUsers.some(item => item.userId === id)
  }

  // useEffect(() => {
  //   const filterUser = (arr) => {
  //     const updatedUser = arr.filter((item) => {
  //       return item !== id;
  //     });
  //     return updatedUser;
  //   };

  //   if (item?.members) {
  //     const filteresArr = new Set(filterUser(item?.members));
  //     const array = Array.from(filteresArr);
  //     setUser(array);
  //   }
  // }, [id, item]);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     const res = await getUser(token, user);
  //     if (res?.data?.statusCode === 200) {
  //       setUserDetails(res?.data?.data?.otherDetails);
  //     }
  //   };
  //   if (user) {
  //     fetchUserDetails();
  //   }
  // }, [token, user]);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="hr-div">
        <hr />
      </div>
      <div className="single-user" onClick={() => navigate(`/chats/${item._id}`)}>
        {item?.profilePicture ? (
          <img src={item?.profilePicture} alt="profile" />
        ) : (
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt&pid=Api&P=0&h=180"
            alt="profile"
          />
        )}
        {item && (
          <div className="name-status">
            <p>
              <strong>{item.firstname}</strong>
            </p>
            <p style={{ color: "grey" }}>{checkOnlineStatus(item._id)? "Online":"Offline"}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default SingleUser;
