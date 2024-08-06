import './Layout.css';
import { Link,Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Home/HHeader.jsx';

function Layout ({direction}) {
  const location=useLocation();
  const addHeader= ()=>{
    const header=document.querySelector(".home-header");
    header.style.display="flex";
  }
  const removeHeader = ()=>{
    const header=document.querySelector(".home-header");
    header.style.display="none";
  }
  
  const clearNotifications=()=>{
    const notifications = document.querySelector(".notifications-count");
    notifications.style.display="none";
  }
  const toggle= ()=>{
    const location=window.location.toString();
        if(location.includes("home")){
          addHeader();
        }else{
          removeHeader();
        }
        if(location.includes("/notifications")){
          clearNotifications();
        }
  }
  
  return (
    <div className="nav">
      <Header/>
      <ul className ="nav-bar" 
        onClick={toggle}>
        <li className="home">
          <Link to="/home"><i className="fa-solid fa-house icon"></i></Link>
        </li>
        <li>
          <Link to="/video"><i className="fa-solid fa-tv icon"></i></Link>
        </li>
        <li>
          <Link to="/friends"><i className="fa-solid fa-user-group icon"></i></Link>
        </li>
        <li>
          <Link to="/marketplace"><i className="fa-solid fa-store icon"></i></Link>
        </li>
        <li>
          <Link to="/notifications"><i className="fa-solid fa-bell icon"></i></Link>
          <span className="notifications-count">15</span>
        </li>
        <li>
          <Link to="/menu"><i className="fa-solid fa-bars icon"></i></Link>
        </li>
      </ul>
      <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames={`slide-${direction}`}
      >
      <Outlet/>
      </CSSTransition>
    </TransitionGroup>
  </div>
    )
}

export default Layout;