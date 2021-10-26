
import './tweet.css'
function Tweet(poper) {
    return ( 
        <div className="tweet">
            <h5 className="userName">User name: {poper.userName}</h5>
            <img src={poper.userImage} alt="" />
          <ul>
              <h5 className="tweetDes">Tweet:</h5>
          {poper.tweetArray}

          </ul>
          <hr/>

          {/* <div className="vartcal"></div> */}
        </div>
       
    );
}
export default Tweet;