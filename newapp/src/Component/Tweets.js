
const TweetsList = [

    {
        name: "Abdullah",
        image: "https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png",
        tweets: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets"
    },
    {

        name: "Amal",
        image: "https://cdn.iconscout.com/icon/free/png-256/hijab-woman-1720800-1467190.png",
        tweets: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets"
    },
    {

        name: "Ali",
        image: "https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png",
        tweets: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets"
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
              <ul><li>{post.tweets}</li></ul> 
              <hr/>
              </div> )}

        </div>
    )

}

export default Tweets 