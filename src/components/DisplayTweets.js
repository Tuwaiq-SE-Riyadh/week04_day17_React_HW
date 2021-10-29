

function DisplayTweets({tweets, index}){
    console.log(tweets);
    return(
        <>
        <h1>User Name: {tweets.username}</h1>
        <img className="logoA" src={tweets.logo}></img>
        {tweets.tweets1.map((ele,index)=>{
            return(
                < >
                
                <p className="parText" key={index}>{ele}</p>
                </>
            )
        })}
            <hr className="line"/>       
        </>
    )

}

export default DisplayTweets