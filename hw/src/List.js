
import './App.css';
function List(props) {
    return (
        <>
        
   <div className="card">
       <h4>User name: {props.name}</h4>
       <img src={props.image}></img>
       <h4>Tweets</h4>
       { props.tweet.map((ele,index)=>{
          return <li>{ele}</li>
       })}
    

     
  </div>
        </>

    )
  }
  
  export default List;