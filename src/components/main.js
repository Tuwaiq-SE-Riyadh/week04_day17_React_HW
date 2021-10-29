import DisplayTweets from "./DisplayTweets";

function Tweets({tweets}){
    // console.log(tweets);

    return(
        <>
        {tweets.map((ele, index)=>{
            return(
                <DisplayTweets
                 tweets={ele}
                  index={index}
                  key={index}/>
            )
        })}
       
        </>
    );

}

export default Tweets