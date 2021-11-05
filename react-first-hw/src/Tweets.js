import './App.css';

function Tweets(props) {

      return (
          <>

          <div className="App">
            <h5>{props.userName}</h5>
            <img src={props.image}/>
            <h5>Tweets:</h5>
          <h5>{props.tweets} </h5>
          <hr/>
        </div>
          </>
      )

}

export default Tweets;