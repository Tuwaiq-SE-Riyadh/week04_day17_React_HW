import logo from './logo.svg';
import './App.css';
import Tweet from './Tweet';

function App() {

  const info =[
    { username:"Max",
    pic:"https://cutt.ly/xROikTM" ,
    list:["be game-changer,theworld is already full players"]},
  
    { username:"ماجد"
    
    ,pic:"https://cutt.ly/MROiiVL" ,
    list:["I have notfailed i have just found 10,000 ways that wnot work-Thomas A.Edison "]}, 

    { username:"joudy"
    ,pic:"https://cutt.ly/iROiq28", 
    list:["if you look what you have in life you will always have more if you look what you dont have in life you will never hava enouph . orpan Winfirey","you willface many defeated .Maya Angelou"]
}]
  return (
    <div className="App">
      {info.map((element)=>
      <Tweet username={element.username} pic={element.pic} list={element.list.map((item)=><li>{item}</li>)}/>)}
      
   

    </div>
  )
  }
  



export default App;
