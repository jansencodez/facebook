import './video.css';

function Video  () { 
  
  return (
  <div className="main">
    <div className="video-head">
      <div className="v-section-head">
        <div>
          <span>Video</span>
        </div>
        <div className='search-section'>
          <div><i className="fa-solid fa-user"></i></div>
          <div><i className="fa-solid fa-search"></i></div>
        </div>
      </div>
      <div className="videos-category">
        <span>Live</span>
        <span>For you</span>
        <span>Reels</span>
        <span>Following</span>
      </div>
    </div>
    <div>
    </div>
  </div>
  )
}

export default Video;