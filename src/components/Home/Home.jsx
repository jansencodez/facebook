import './Home.css';

import Post from './Post.jsx';
import Story from './Story.jsx';
import Create from './Create.jsx';
import AddPost from './AddPost.jsx';

//import useFetch from '../../hooks/useFetch.js'

function Home  () { 
  //const url="http://localhost:3001/posts";
  //const {error, isLoading, data} = useFetch(url);
  const data = [
    {
      "id": "9adc",
      "userId": "1",
      "title": "Not me",
      "body": "I have nothing to show for",
      "audience": "friends of friends",
      "time": "3minutes",
      "details": {
        "likes": 3,
        "comments": 0,
        "shares": 0
      }
    },
    {
      "id": "aba1",
      "userId": "1",
      "title": "I will find you",
      "body": "I will look for you,\nI will find you,\nAnd I will love you.😗😂",
      "audience": "friends of friends",
      "time": "3minutes",
      "details": {
        "likes": 138,
        "comments": 0,
        "shares": 0
      }
    },
    {
      "id": "be02",
      "userId": "1",
      "title": "There are things we don't ask for",
      "body": "1. A peace of mind\n2. When to act on Goals\n3.the possibility of not getting what we want\n4. What it means",
      "audience": "friends of friends",
      "time": "3minutes",
      "details": {
        "likes": 0,
        "comments": 0,
        "shares": 0
      }
    },
    {
      "id": "05a9",
      "userId": "1",
      "title": "Tell me about peace",
      "body": "Peace,\n🕊️ \nPeace,\nA rare gem,\nEven when it all seems peaceful\nIt's not that as peaceful ",
      "audience": "global",
      "time": "3minutes",
      "details": {
        "likes": 0,
        "comments": 0,
        "shares": 0
      }
    },
    {
      "id": "3bb8",
      "userId": "1",
      "title": "Home is home for us ",
      "body": "The best you can for you is what is not written on your face but exists in your entirety.",
      "audience": "friends",
      "time": "3minutes",
      "details": {
        "likes": 0,
        "comments": 0,
        "shares": 0
      }
    },
    {
      "id": "fb31",
      "userId": "1",
      "title": "Say nothing more😂",
      "body": "A joke is not that of a joke",
      "audience": "public",
      "time": "3minutes",
      "details": {
        "likes": 0,
        "comments": 0,
        "shares": 0
      }
    }
  ]
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
