import React, {lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Home from "./Components/Home/Home";
// import Post from "./Components/Home/Post/Post";
// import MainPage from "./Components/MainScreen/MainPage";
import { sendUpdate } from "./Hooks/api";
import useHTTP from "./Hooks/use-http";
const Header = lazy(() => import("./Components/Header/Header"))
const Home = lazy(() => import("./Components/Home/Home"))
const Post = lazy(() => import("./Components/Home/Post/Post"))
const MainPage = lazy(() => import("./Components/MainScreen/MainPage"))
let initial = true;
function App() {
  const items = useSelector(state => state.items);
  const userId = useSelector(state => state.userId);
  const changed = useSelector(state => state.changed);
  const {sendRequest} = useHTTP(sendUpdate)
  const val = localStorage.getItem("isLoggedIn") === "1"; 
  const [isLoggedIn, setIsLoggedIn] = useState(val);
  const [showPost, setshowPost] = useState(false);
  const[ismanPageOpen , setismainPageOpen] = useState(!val)
  const LoginHandler = () => {
    setIsLoggedIn(true);
    setshowPost(false);
    setismainPageOpen(false)
  };
  const LogoutHandler = () => {
    localStorage.setItem("isLoggedIn" , "0");
    localStorage.clear();
    window.location.reload();
  };
  const PostHandler = () => {
    setshowPost(!showPost)
  };
  const mainPageHandler = () => {
    setismainPageOpen(!ismanPageOpen)
  }
  useEffect(() => {
    if(initial) {
      initial = false;
    }
    else if(isLoggedIn && changed) {
      sendRequest({items : items , userId : userId})
    }
 },[isLoggedIn , items , sendRequest  , changed , userId] );
  return (
    <> 
      <Header
         ShowSignIn ={false}
         ShowSignUp ={false}
         onShowPost={PostHandler}
         onLogout={LogoutHandler}
         isLoggedIn={isLoggedIn}
      />
      {isLoggedIn && showPost && <Post />}
      {isLoggedIn && !showPost && <Home/>}
      {ismanPageOpen && <MainPage onSignUp={mainPageHandler} onSignIn={LoginHandler} />}
      </>
  );
}

export default App;
