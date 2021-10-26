import React ,{Component} from "react";
import './App.css';
import Ltem1 from './Component/Ltem1'
class App extends Component{
  state={
     araay:[
      {
      name:"max",
      img:"http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
      twater:" Be agame-changer. the world is alarrdy full of poeple "
     },
     {
       name:"Majed",
       img:"http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
       twater:"Hi my name majed ,i heav not filed"
      },
      {
       name:"Judy",
       img:"http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
       twater:" Hi my name judy" ,
       
      }
     ]
  }
  render(){
  return (
    <div className="App">
     
      <Ltem1 araay= {this.state.araay} />

    </div>
  );
}

}

export default App;
