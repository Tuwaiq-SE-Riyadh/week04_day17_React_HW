
import './compo.css';

function Post({image, name, tweets}){
    const listTweets = tweets.map((ele,index) =><li key={index}>{ele}</li>);
    return(
        <div id="post">
        <h5><b>User name: {name}</b></h5>
            <img src={image} alt=""></img>
            <h5><b>Tweets:</b></h5>
            <div>{listTweets}</div>
            <hr/>
        </div>
    );
}
export default Post;