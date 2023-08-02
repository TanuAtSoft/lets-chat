import SingleUser from "./SingleUser"
const UserContainer =()=>{
    const user = [1,2,3,4]
    return(
        <div className='inner-container sideBar-container'>
          <h3>Users</h3>
          <br/>
          {user.map((item)=>{
           return  <SingleUser key={item}/>
          })}
        </div>
    )
}
export default UserContainer