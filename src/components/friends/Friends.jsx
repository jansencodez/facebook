import './Friends.css';
import Friend from './Friend.jsx';
import friendRequests from '../../data/friendRequests.js';

import {useState} from 'react'
function Friends () {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState([]);
  const [requestsList, setRequestsList] =useState(friendRequests);
  
  const handleConfirm = (userId,e)=>{
    e.preventDefault();
    requestsList.forEach((request)=>{
      if(request.userId===userId){
        handleDelete(userId,e)
        friends.push(request)}
    })
    setFriends(friends)
    setCount(friends.length)
  }
  
  const handleDelete = (userId,e)=>{
    e.preventDefault();
    let newList=[];
    requestsList.forEach((friend)=>{
      if(friend.userId!==userId){
        newList.push(friend)
      }
    })
    setRequestsList(newList)
  }
  
  const requestsListView = requestsList.map((fRequest)=><Friend 
          handleConfirm={handleConfirm}
          handleDelete={handleDelete}
          key={fRequest.userId} 
          fRequest={fRequest}/>);
  
  return(
    <div className="main">
      <div className="f-header">
        <div className='f-head'>
          <div className="friends-head-text">
            <span>Friends</span></div>
          <div className="f-search"><i className="fa-solid fa-search"></i></div>
        </div>
        <div className="f-nav-section">
          <div>Suggestions</div>
          <div>Your friends{count}</div>
        </div>
      </div>
      {requestsListView}
    </div>
    )
}

export default Friends;