
import { render } from "@testing-library/react";
import React from "react-jsx"
import "./App.css";
function App() {
const listitem=[
{id:1,username:"username:max",pic:"https://img.lovepik.com/element/40145/1024.png_860.png",
tweets:"tweets",list:"Be a game-changer. the world is already full of players"},
{id:2,username:"username:ماجد",
pic:"https://png.pngtree.com/png-clipart/20190903/original/pngtree-cartoon-customer-service-professional-male-png-free-material-png-image_4425164.jpg",
tweets:"tweets",
list:"Be a game-changer. the world is already full of players"},
{id:3,username:"username:judy",pic:"https://img.pikbest.com/png-images/qiantu/cartoon-customer-service-png-free_2726146.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024",
tweets:"tweets",
list:"Be a game-changer. the world is already full of players"}
]

const printitem=listitem.map((item,key)=>{


render(
        <div className='h'>
            <p>{item.username}</p>
           <img src={item.pic}/>
               <p>{item.tweets}</p>
               <ul>
               <li>{item.list}</li>
               <li>{item.list2}</li>
                              </ul>
                              <hr/>
    </div>
    );
}
)
}
    
export default App;