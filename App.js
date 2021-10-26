import'./app.css';
function App() {
const listitem=[
{id1:username:"username:max",Img:"https://img.lovepik.com/element/40145/1024.png_860.png",tweets:"tweets",list:"Be a game-changer. the world is already full of players"},
{id2:username:"username:ماجد",Img:"https://png.pngtree.com/png-clipart/20190903/original/pngtree-cartoon-customer-service-professional-male-png-free-material-png-image_4425164.jpg",tweets:"tweets",list:"Be a game-changer. the world is already full of players"},
{id3:username:"username:judy",Img:"https://img.pikbest.com/png-images/qiantu/cartoon-customer-service-png-free_2726146.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024",tweets:"tweets",list:"Be a game-changer. the world is already full of players"}
]

const printitem=listitem.map((item,key)=>{



    return (
        <div className="app">
            <P>{item.username}</P>
           <img src={item.pic}>
               <P>{item.tweets}</P>
               <ul>
<li>{item.list}</li>
<li>{item.list2}</li>
               </ul>
               <hr/>
    </div>
    );
}

}
    
export default App;
