import './tweet.css';
 
import user1 from  './user1.png';
import user2 from  './user2.png';
import user3 from  './user3.png';
import user4 from  './user4.png';

function App() {
const list = [{
  userName:'Rena',
  imageUser:user1,
  tweetData:'Be a game-changer. The world is already full of players'

},
{
  userName:'Fahed',
  imageUser:user2,
  tweetData:'I have not failed. Ihave jusr found 10,000 ways that will not work-Thomes Adeson '

},
{
  userName:'Sara',
 imageUser:user3,
  tweetData:'If you Look at what you have in life , you will always have more . if you look at what you do not have in life , you will never have enough -Oprah winfry '

},
{
  userName:'kHloud',
  imageUser:user4,
  tweetData:['You wil face mony defeats in life , but never let yourself be defeated -Maya Angelou ']

}]
 
  return (
    <div className='tweet' >
      {
      list.map((element , index)=>{
      return   <div kay={index}>
        <img src={element.imageUser}/>
        <br/>
         {element.userName}
         <br/>
         {element.tweetData}
         <hr/>
        </div>
      })
      }
    
    </div>
  );
}

export default App;
