import './Tweets.css'
function Tweet({tweet}) {

    return ( 
        <div className="tweet">
            <h5 className="userName">User name: {tweet.userName}</h5>
            <img src={tweet.profileImg} alt="" />
          <ul className="a">
          {tweet.tweetArr.map((userTweet)=>{
              return <li className="array">{userTweet}</li>
          })
        }
          </ul>
        </div>
       
    );
}
export default Tweet;

