import logo from './logo.svg';
import './App.css';
import Tweets from '../src/component/Tweets'


function App() {

  let obj = [
    {
    name:"saad",
    image:"https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png",
    tweets:["first Tweets : Saad", "2's Tweets : Saad","3th Tweets : Saad"]
    },
    {
    name:"fahad",
    image:"https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png",
    tweets:["first Tweets : fahad", "2's Tweets : fahad"]
    },
    {
    name:"shahad",
    image:"https://cdn-icons-png.flaticon.com/512/146/146025.png",
    tweets:["first Tweets : shahad"]
    },
]

  return (
    <div className="App">
      <Tweets obj={obj}/>
    </div>
  );
}

export default App;
