import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tweet from './componet/tweet';
import reportWebVitals from './reportWebVitals';
import userImage1 from'./componet/user1.png'
import userImage2 from'./componet/user2.png'
import userImage3 from'./componet/user3.png'
import userImage4 from'./componet/user4.png'
let user1={
  userName:'Rena',
  imageUser:userImage1,
  tweetData:['Be a game-changer. The world is already full of players']
}
let user2={
  userName:'Fahed',
  imageUser:userImage2,
  tweetData:['I have not failed. Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
}
let user3={
  userName:'Sara',
  imageUser:userImage3,
  tweetData:['If you Look at what you have in life , you will always have more . if you look at what you do not have in life , you will never have enough -Oprah winfry ']
}
let user4={
  userName:'kHloud',
  imageUser:userImage4,
  tweetData:['You wil face mony defeats in life , but never let yourself be defeated -Maya Angelou ']
}


ReactDOM.render(
  <React.StrictMode>
    
     <Tweet userImage={user1.imageUser} userName={user1.userName} tweetArray={user1.tweetData.map((userTweet)=>{
        return <li className="TeetsArray">{userTweet}</li>
     })}/>
    

<Tweet userImage={user2.imageUser} userName={user2.userName} tweetArray= {user2.tweetData.map((userTweet)=>{
        return <li className="TeetsArray">{userTweet}</li>
     })}/>
   

<Tweet userImage={user3.imageUser} userName={user3.userName} tweetArray={user3.tweetData.map((userTweet)=>{
       return <li className="TeetsArray">{userTweet}</li>
     })}
 />
    
<Tweet userImage={user4.imageUser}userName={user4.userName} tweetArray= {user4.tweetData.map((userTweet)=>{
         return <li className="TeetsArray">{userTweet}</li>
     })}
   />
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
