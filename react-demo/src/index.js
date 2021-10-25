import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tweets from './component/Tweets';
import reportWebVitals from './reportWebVitals';
import userImg1 from './user1.jpg'
import userImg2 from './user2.png'
import userImg3 from './user3.png'
import userImg4 from './user4.jpg'
let user1={
  userName:'Maha',
  profileImg:userImg1,
  tweetArr:['Be a game-changer. The world is already full of players']
}
let user2={
  userName:'Saud',
  profileImg:userImg2,
  tweetArr:['I have not failed. Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
}
let user3={
  userName:'Ahmed',
  profileImg:userImg3,
  tweetArr:['I have not failed. ','Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
}
let user4={
  userName:'Salwa',
  profileImg:userImg4,
  tweetArr:['I have not failed. Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
}


ReactDOM.render(
  <React.StrictMode>
    
     <Tweets user1Img={user1.profileImg} userName={user1.userName} tweetArray={user1.tweetArr.map((userTweet)=>{
        return <li className="array">{userTweet}</li>
     })}/>
    

<Tweets user1Img={user2.profileImg} userName={user2.userName} tweetArray= {user2.tweetArr.map((userTweet)=>{
        return <li className="array">{userTweet}</li>
     })}/>
   

<Tweets user1Img={user3.profileImg} userName={user3.userName} tweetArray={user3.tweetArr.map((userTweet)=>{
       return <li className="array">{userTweet}</li>
     })}
 />
    
<Tweets user1Img={user4.profileImg} userName={user4.userName} tweetArray=   {user4.tweetArr.map((userTweet)=>{
         return <li className="array">{userTweet}</li>
     })}
   />
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
