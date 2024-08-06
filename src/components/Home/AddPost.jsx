import {useNavigate} from 'react-router-dom'


function AddPost () {
  const navigate=useNavigate();
  const goToAddPost=(e)=>{
    e.preventDefault();
    navigate("/addpost");
  }
  return (
    <div className="whats-on-your-mind">
      <div className="user-profile">
        <img src="" alt="pp"/>
      </div>
      <div className="input" onClick={(e)=>{goToAddPost(e)}}>
        <span>Whats On Your Mind?</span>
      </div>
      <div className="add-image">
         <i className="fa-solid fa-image icon"></i>
      </div>
    </div>
    )
}

export default AddPost;