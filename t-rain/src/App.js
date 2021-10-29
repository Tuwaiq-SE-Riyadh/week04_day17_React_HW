import logo from './logo.svg';
import './App.css';
import Tweet from './Tweet';

function App() {

  const info =[
    { username:"Max",pic:"https://cutt.ly/xROikTM" ,list1:"be game-changer,theworld is already full players"},
    { username:"ماجد",pic:"https://cutt.ly/MROiiVL" ,list1:"I have notfailed i have just found 10,000 ways that wnot work-Thomas A.Edison "}, 
    { username:"joudy",pic:"https://cutt.ly/iROiq28", list1:"if you look what you have in life you will always have more if you look what you dont have in life you will never hava enouph . orpan Winfirey",list2:"you willface many defeated .Maya Angelou"}
]
  return (
    <div className="App">
      <Tweet tweet={info}  />
      
   
   
    </div>
  )
  }
  



export default App;
