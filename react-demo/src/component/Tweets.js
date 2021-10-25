
import './Tweets.css'
function Tweets(tweet) {
    return ( 
        <div className="tweet">
            <h5 className="userName">User name: {tweet.userName}</h5>
            <img src={tweet.user1Img} alt="" />
          <ul className="a">
          {tweet.tweetArray}

          {/* <li className="array">{tweet.tweetArray} </li> */}
          </ul>
        </div>
       
    );
}
export default Tweets;