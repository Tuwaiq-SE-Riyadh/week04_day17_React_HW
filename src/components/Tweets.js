import react from "react";
import TweetsList from "./TweetsList";

function Tweets(props) {
    return (
        <>
          {/* {console.log(props.user.name)} */}
          <h3>{"User name: " + props.user.name}</h3>
          <img src={props.user.image} />
          <h4>Tweets:</h4>
          
          {/* tweetList takes an array of tweets */}
          <TweetsList tweetsArray={props.user.tweets}/>
          <hr></hr>
        </>
    );
  }
  
  export default Tweets;