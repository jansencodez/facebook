import './Upload.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const Upload = () => { 
  const navigate=useNavigate();
  const [isLoading, seIsLoading]=useState(false)
  const [title, setTitle]=useState("");
  const[body, setBody]=useState("")
  const[audience, setAudience]=useState("public")
  
  const post={
    userId:"1",
    title,
    body,
    audience,
    time:"3minutes",
    details:{
      likes:0,
      comments:0,
      shares:0
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    seIsLoading(true)
    setTimeout(()=>{
      fetch("http://localhost:3001/posts", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(post)
    }).then(()=>{
      seIsLoading(false)
      navigate("/")
    })
    },1000)
    
  }
  
  const handleBack =(e)=>{
    e.preventDefault();
    navigate("/");
  }
  
  const reSize=()=>{
    const textarea=document.querySelector(".textarea");
    textarea.style.height="auto";
    textarea.style.height=textarea.scrollHeight+"px";
  }
  
  return (
    <div className="upload">
    <div className="upload-header">
      <div onClick={(e)=>{
          handleBack(e)
        }}><i className="fa-solid fa-arrow-left"></i>
        </div>
      <div><span>Create post</span></div>
      <div><span>NEXT</span></div>
    </div>
    <div className="post-content">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <select
        onChange={(e)=>setAudience(e.target.value)}
        value={audience}
        >
          <option>public</option>
          <option>friends</option>
          <option>only me</option>
        </select>
        <input
          placeHolder="post title"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea 
          placeHolder="post body"
          onChange={(e)=>setBody(e.target.value)}
          value={body}
          className="textarea" 
          onInput={reSize}
          />
          {!isLoading&&<button>addpost</button>}
          {isLoading&&<button disabled>adding...</button>}
      </form>
    </div>
  </div>
    
    )
}

export default Upload;