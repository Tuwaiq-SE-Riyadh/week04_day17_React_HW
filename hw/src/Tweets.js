function Tweets(props) {
    
    return (
      <div id="T" >

      <p id = "p1">UserName: {props.props.name}</p>

        <img src={props.props.image} width="40px" height="40px" />

        <p id = "p1">Tweets</p>
        {

        props.props.Tweets.map(function(e, index){
           return <p key={index}>- {e}</p> 
        })}

        <hr/>
      </div>
    );
  }

  export default Tweets;


