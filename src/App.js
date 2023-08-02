import "./App.css";
import UserContainer from "./components/UserContainer";
import ChatContainer from "./components/ChatContainer";
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <div className="header"></div>
      <div className="container">
        <UserContainer />
        <ChatContainer />
      </div> */}
    </div>
  );
}

export default App;
