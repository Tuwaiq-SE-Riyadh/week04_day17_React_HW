import logo from './logo.svg';
import './App.css';
import Tweets from './components/Tweets.js';

// Twitter app
// Create a react app.
// Make Tweets Component that contain array of objects, each object will have name, image, array of Tweets.
// You should display Tweets component in App component using map.
function App() {
  let arr=[
    {name:"Max",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_upzZ7ljAZIdBCo1AL1A3BPA5i_b2K1HI4w&usqp=CAU",
    tweet:["Be a game-changer. the world is already full if players"]},
    {name:"ماجد",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5R9gWih2eCB8dEqtk7g_td5YGWOt600yYNg&usqp=CAU",
    tweet:["I have not faild. I've just found 10,000 ways that won't work. - Thomas A.Edison"]},
    {name:"Joudy",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjIwk8J6HySnA4Lbq4GgKv_og10cX0fBVbg&usqp=CAU",
    tweet:["If you look at what you have in life, you'll always have more.","You will face many defeats in life, but never let yourself be defeated. -Maya Angwlou"]}]
    return (
    <>
      {arr.map((element,index)=><Tweets name={element.name} image={element.image} tweet ={element.tweet.map((e)=><li>{e}</li>)} />)}
    </>
  );
}

export default App;
