import './Home.css';

import Post from './Post.jsx';
import Story from './Story.jsx';
import Create from './Create.jsx';
import AddPost from './AddPost.jsx';

import useFetch from '../../hooks/useFetch.js'

function Home  () { 
  const url="http://localhost:3001/posts";
  const {error, isLoading, data} = useFetch(url);
  
  return (
    <div className="main">
        <AddPost/>
        <div className="story-section">
          <Create/>
          <Story/>
        </div>
        {error&&<div className="error">{error}</div>}
        {isLoading&&<div>Loading...</div>}
        {data&&data.map((post)=>{ return <Post 
        key ={post.id}
        post={post}/>})}
    </div>
  )
}

export default Home;