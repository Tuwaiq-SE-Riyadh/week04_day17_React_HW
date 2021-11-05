import './App.css';
import React from 'react';
import Tweets from './Tweets'

function App() {

  const user1={name:"User name: Max", 
  image:"https://yt3.ggpht.com/-lwlGXn90heE/AAAAAAAAAAI/AAAAAAAAAAA/FmCv96eMMNE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", 
  tweets:["Be a game-charger. The world is already full of players"]
  }
  const user2={name:"User name: ماجد", 
  image:"https://artprojectsforkids.org/wp-content/uploads/2020/07/Draw-Cartoon-Face-Guy-791x1024.jpg", 
  tweets:["I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison"]
  }
  const user3={name:"User name: Joudy", 
  image:"https://i.pinimg.com/736x/aa/d2/d3/aad2d388a04d88cc7cc15b3f0cbe007d--winx-club.jpg",
  tweets:["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"," You will face many defeats in life, but never let yourself be defeated. -Maya Angelou"]
  }
  


  return (
    <>
    <Tweets image={user1.image} userName={user1.name} tweets={user1.tweets.map((tweets)=>{
      return <li>{tweets}</li>
    })}/>

    <Tweets image={user2.image} userName={user2.name} tweets={user2.tweets.map((tweets)=>{
      return <li>{tweets}</li>
    })}/>

<Tweets image={user3.image} userName={user3.name} tweets={user3.tweets.map((tweets)=>{
      return <li>{tweets}</li>
    })}/>
    
    
            {/* {info.map((item) => {
      return (
        <div className="App">
            <h5>{item.name}</h5>
            <img src={item.image}/>
            <h5>Tweets:</h5>
          <h5><li> {item.tweets}</li></h5>
          <h5>{item.tweets2?<li>{item.tweets2}</li>:""}</h5>
          <hr/>
        </div>
    );
    }
    )} */}
    </>
  )
}

export default App;
