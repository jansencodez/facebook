import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import {useState, useEffect} from "react";

import Home from './components/Home/Home.jsx';
import Video from './components/video/Video.jsx';
import Friends from './components/friends/Friends.jsx';
import Marketplace from './components/marketplace/Marketplace.jsx';
import Notifications from './components/notifications/Notifications.jsx';
import Menu from './components/menu/Menu.jsx'
import Layout from './components/Layout/Layout.jsx';
import Upload from './components/Home/Upload.jsx'

const AnimatedRoutes = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const [direction, setDirection] = useState('');

  const routeOrder = ['/', 'home', 'video', 'friends', 'marketplace', 'notifications', 'menu'];

  useEffect(() => {
    const prevIndex = routeOrder.indexOf(prevLocation.pathname.replace('/', '')||'/');
    const currentIndex = routeOrder.indexOf(location.pathname.replace('/', '')||'/');
    
    if (currentIndex < prevIndex) {
      setDirection('left');
    } else{
      setDirection('right');
    }
    setPrevLocation(location);
  }, [location]);

  return (
    <Routes location={location}>
        <Route path="/" element={<Layout direction={direction}/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="video" element={<Video/>}/>
          <Route path="friends" element={<Friends/>}/>
          <Route path="marketplace" element={<Marketplace/>}/>
          <Route path="notifications" element={<Notifications/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>
      </Routes>
  );
};
function App() {
  return (
    <Router>
    <Routes>
      <Route path="addpost" element={<Upload/>}/>
    </Routes>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
