import "./Tweets.css";

function Tweets(props) {
  return (
    <div>
      <h1>User name : {props.name}</h1>
      <img src={props.image} />
      <h1>Tweats: </h1>

      <h5> {props.tweets}</h5>

      <hr></hr>
    </div>
  );
}

export default Tweets;
