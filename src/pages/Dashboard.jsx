import { Fragment, useEffect,useState } from "react";
import UserContainer from "../components/UserContainer";
import ChatContainer from "../components/ChatContainer";
import DefaultChatContainer from "../components/DefaultChatContainer";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const Dashboard = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 856px)' })
    // let token = JSON.parse(localStorage.getItem("token"));
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     if(!token){
    //         navigate("/login")
    //     }
    // },[navigate, token])
    const [selected,setSelected] = useState(false)
    const handleSelect=()=>{
        setSelected(true)
    }
    console.log("selected",)
  return (
    <Fragment>
      <div className="header"></div>
      <div className="container">
     <UserContainer handleSelect={handleSelect} selected={selected}/>
      {!selected && !isTabletOrMobile && <DefaultChatContainer/>}
      </div>
    </Fragment>
  );
};
export default Dashboard;
