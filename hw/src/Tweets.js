
import './App.css';
import List from './List';

function Tweets() {
  let items=[
    {
    name:"Amal",
    img:"data:image/png;base64,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",
    tweet:["Stay consistent in your studying"]
  },
    {
      name:"Mohammed",
      img:"data:image/png;base64,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",
      tweet:["Today’s studying plants the seeds for tomorrow’s exam success"]
    },
    {
      name:"Noura",
      img:"data:image/png;base64,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",
      tweet:["Don’t let fear of failure put you off"]
    },
  ]
  return (
      <>
      {
       items.map((elem,index)=>{
           return <List name={elem.name} image={elem.img}  tweet={elem.tweet} key={index} />
       })
   }
      </>
  );
}

export default Tweets;
