import {useState} from 'react'
import useFetch from '../../hooks/useFetch.js'

function Post({post}){
  const {data:users}=useFetch("http://localhost:3001/users");
  const[likes, setLikes]=useState(post.details.likes);
  
  const handleDelete=()=>{
    fetch('http://localhost:3001/posts/' +post.id, {
      method:"DELETE"
    })
  }
  const handleLike = ()=>{
    setLikes(likes+1);
    fetch('http://localhost:3001/posts/'+post.id, {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
  body: JSON.stringify(
    {
      details:{
        likes:likes,
        comments:0,
        shares:0
      }
    })
    })
  }
  
  
  return(
  <div className="all-post">
    <div className="posting-profile-details">
        <div className="left">
          <img src="" alt="pp"/>
        </div>
        <div className = "middle">
          <div className="posting-profile-name">
            {users&&users.map((user)=>{
             return user.id===post.userId&&<span>{user.name}</span>})}
          </div>
          <div className="shared-details">
            <span>{post.time}</span>
            <span>{post.audience}</span>
          </div>
        </div>
        <div className="right">
          <div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div onClick={handleDelete}>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
      </div>
      <div className="post-title">
        <p>{post.title}</p>
      </div>
      <div className="post-body">
          <p>{post.body}</p>
      </div>
      <div className="post-likes-comments">
        <span>{likes} likes</span>
        <span>{post.details.comments} comments</span>
        <span>{post.details.shares} shares</span>
      </div>
      <div className="post-reaction">
         <div onClick={handleLike}>
          <i className="fa-solid fa-thumbs-up"></i>
         </div>
         <div>
           <i className="fa-solid fa-comment"></i>
         </div>
         <div>
           <i className="fa-solid fa-link"></i>
         </div>
         <div> 
          <i className="fa-solid fa-share"></i>
         </div>
        </div>
      </div>
    )
}

export default Post;