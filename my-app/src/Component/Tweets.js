import "./Tweets.css";
function Tweets() {
    const object=[
        {name:"Max",
    Image:"https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png",
tweets:["Be a game-changer.The world is already full of players."],
},
{
name:"Seba",
Image:"https://toppng.com/uploads/preview/circled-user-female-skin-type-4-icon-pro-icon-115534084504dcnr2bmdl.png",
tweets:["I have not failed.I've just found 10,000 ways that won't work.-Thomas A.Edison."]
},
{
    name:"Noura",
    Image:"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    tweets:["if you look at what you have in life,you'll always have more.if you look at what you don't have in life, you'll never have enough.-Oprah Winfrey.","You will face many defeats in life,but never let yourself be defeated.-Maya Angelou."]
}
    ];
    return(
        <div>
            {object.map((element)=>(
              <div>
                  <h1>User Name: {element.name}</h1>
                  <img src={element.Image}/>
                  <ul>
                      {element.tweets.map((tweet)=>(
                          <li><h2>Tweets:</h2>{tweet}</li>
                      ))}
                  </ul>
                  <hr></hr>
              </div>  
            ))}
        </div>
    );
}
export default Tweets;