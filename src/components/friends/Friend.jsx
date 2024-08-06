

function Friend ({fRequest, handleConfirm, handleDelete}){
  return(
    <div className="account">
        <div className="account-profile">
          <img src={fRequest.profileImg} alt="pp"/>
        </div>
        <div className="acc-details">
          <div className="name-time">
            <span className="acc-name">{fRequest.userName}</span>
            <span className="acc-time">time</span>
          </div>
          <div className="mutual-friends">
            <div className="m-images">
              <img scr={fRequest.mutual.m1.profileImg} alt="p1"/>
              <img src={fRequest.mutual.m2.profileImg} alt="p2"/>
            </div>
             <span>nmutual friends</span>
          </div>
          <div className="acc-buttons">
            <button onClick={(e)=>{
                handleConfirm(fRequest.userId,e)}}>Confirm</button>
            <button onClick={(e)=>{
              handleDelete(fRequest.userId,e)
            }}>Delete</button>
          </div>
        </div>
      </div>
    
    )
}

export default Friend;