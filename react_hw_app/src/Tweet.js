function Tweet(){
    const arr = [
        {
        name:"Max",
        image:"https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900007/85362512-user-icon-male-avatar-in-business-suit-businessman-flat-icon-man-in-business-suit-avatar-of-business.jpg",
        Tweets:["have a nice day"],
      },
      {
      name:"ماجد",
        image:"https://thumbs.dreamstime.com/b/businessman-vector-icon-avatar-sign-man-business-suit-male-face-flat-design-man-avatars-profile-concept-concept-boss-85517342.jpg",
        Tweets:["welcome back"],
      },
      {
        name:"Joudy",
          image:"https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
          Tweets:["have a nice weekend","nice to meet you"],
        }
    ]
    return (
        <>  
            
             {arr.map((info)=>
            <div>
                <div className="div1">
            <h2>User Name :{info.name}</h2>
            <img src={info.image} height="90px"/>
            <p>Tweets:</p>
            </div>
            <ul>{info.Tweets.map((tweet)=>
            <li className="li1">{tweet}</li>
            )
            
            }</ul>
            <hr/>
            </div>
            )}
        </>
    )
}

export default Tweet;