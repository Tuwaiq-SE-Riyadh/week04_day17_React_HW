import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {print()}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function print() {

  const listItem=[
    {id:1 , username:"Username:Max",pic:"https://cutt.ly/xROikTM",tweets:"Tweets:" ,list:"be game-changer,theworld is already full players"},
     {id:2 , username:"Username:ماجد",pic:"https://cutt.ly/MROiiVL",tweets:"Tweets:" ,list:"I have notfailed i have just found 10,000 ways that wnot work-Thomas A.Edison "}, 
     {id:3 , username:"Username:joudy",pic:"https://cutt.ly/iROiq28",tweets:"tweets:", list:"if you look what you have in life you will always have more if you look what you dont have in life you will never hava enouph . orpan Winfirey",list2:"you willface many defeated .Maya Angelou"}, 
  ]
  const printItem=listItem.map((item,key)=>{
  return (
    <div className="app">
     <p>{item.username}</p>
     <img src={item.pic}/>
     <p>{item.tweets}</p>
     <ul>
       <li>{item.list}</li>
       <li>{item.list2}</li>
     </ul>
     <hr/>

   </div>
       
  )
  
  }
  )
return(
  { printItem}
)


}

