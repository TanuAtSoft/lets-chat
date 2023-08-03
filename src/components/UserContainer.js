import SingleUser from "./SingleUser"
const UserContainer =({handleSelect,selected})=>{
    const user = [1,2,3,4]
    return(
        <div className='inner-container sideBar-container'>
          <div className="sidebar-text">
          <h3>Chats</h3>
          </div>
          <br/>
          {user.map((item)=>{
           return  <SingleUser key={item} handleSelect={handleSelect}/>
          })}
        </div>
    )
}
export default UserContainer