import React ,{Component} from "react";

class Ltem1 extends Component{
render(){
  const {araay}=this.props;
  const theItem= araay.map((item ,index)=>{
    return(
      <div>
        <h2> User name:{item.name} </h2>
        <img src={item.img}/>
        <h3> Tweets:</h3>
        <li> {item.twater} </li> 
        <hr></hr>
      </div>
    )
  })
  return(
    <div>
     {theItem}
    </div>
  )
}  

  
}
 
export default Ltem1;