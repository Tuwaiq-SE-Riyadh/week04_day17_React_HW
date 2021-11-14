
const TweetsList = [

    {
        name: "Abdullah",
        image: "https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png",
        tweets: ["tweet 1 ", "tweet 2 ", "tweet 3 "]
    },
    {

        name: "Amal",
        image: "https://cdn.iconscout.com/icon/free/png-256/hijab-woman-1720800-1467190.png",
        tweets: ["tweet 1 ", "tweet 2 ", "tweet 3 "]
    },
    {

        name: "Ali",
        image: "https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png",
        tweets: ["tweet 1 ", "tweet 2 ", "tweet 3 "]
    },
]

function Tweets (){

    return(

        <div className="Tweets">
           
           {TweetsList.map((post) =>    
              <div className='info'>
              <h3>User Name: {post.name}</h3>
              <img src = {post.image} alt="user image"/>
              <h3>Tweets: </h3>
              <ul> {post.tweets.map((ele , ind)=>{
                        return <li key={ind}>{ele}</li>
                    })}</ul> 
              <hr/>
              </div> )}

        </div>
    )

}

export default Tweets 