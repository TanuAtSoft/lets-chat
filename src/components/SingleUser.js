import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const SingleUser = ({handleSelect}) => {
  const navigate = useNavigate()
  return (
    <Fragment>
      <div className="hr-div">
        <hr />
      </div>
      <div className="single-user" onClick={()=> navigate("/chats/123")}>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.18J_SkGQfSPKqZzCqlsK-gHaLG&pid=Api&P=0&h=180"
          alt="profile"
        />
        <div className="name-status">
          <p>
            <strong>Selena Gomez</strong>
          </p>
          <p style={{color:"grey"}}>Online</p>
        </div>
      </div>
    </Fragment>
  );
};
export default SingleUser;
