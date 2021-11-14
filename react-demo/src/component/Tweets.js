
import './Tweets.css'
import userImg1 from './user1.jpg'
import userImg2 from './user2.png'
import userImg3 from './user3.png'
import userImg4 from './user4.jpg'
import Tweet from './Tweet'


function Tweets() {
    let users=[
        {
            userName:'Maha',
            profileImg:userImg1,
            tweetArr:['Be a game-changer. The world is already full of players']
          },{
            userName:'Saud',
            profileImg:userImg2,
            tweetArr:['I have not failed. Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
          },{
            userName:'Ahmed',
            profileImg:userImg3,
            tweetArr:['I have not failed. ','Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
          },{
            userName:'Salwa',
            profileImg:userImg4,
            tweetArr:['I have not failed. Ihave jusr found 10,000 ways that will not work-Thomes Adeson ']
          },
    
    
    ]
    
    return (
        <>
       { users.map((element)=>{
         return   <Tweet tweet={element}/>   
        })}
        </>
    )
}
export default Tweets;

