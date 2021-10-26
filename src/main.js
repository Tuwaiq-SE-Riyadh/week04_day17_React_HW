
function Tweets(){
    const tweets = [{
        username: "Max",
        logo: "https://mpng.subpng.com/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg",
        tweets1:["Be a game-changer. The world is already full of players"]
    },{
        username: "ماجد",
        logo: "https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png",
        tweets1:["I have not failed. I've just found 10,000 ways that won't work. -Thomas A. Edison"]
    },{
        username: "Joudy",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIdlqsqk4RyGcfcOMgYPl_NG1PKDq2FjCTQ&usqp=CAU",
        tweets1:["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
        "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou"]
    }]

    return(
        <>
        <div className="page">
            <p className="parText">User Name: {tweets[0].username}</p>
            <img src={tweets[0].logo} className="logoA"></img>
            <p className="parText">Tweets:</p>
            <ul>
            {tweets[0].tweets1.map(ele => 
                 <li key="1">{ele}</li>)}
                 </ul>
                 <hr className="line"/>
    {/* ------------------------------------------------------------------- */}



            <p className="parText">User Name: {tweets[1].username}</p>
            <img src={tweets[1].logo} className="logoA"></img>
            <p className="parText">Tweets:</p>
            <ul>
            {tweets[1].tweets1.map(ele2 => 
                 <li key="2">{ele2}</li>)}
                 </ul>
                 <hr className="line"/>


                 {/* ------------------------------------------------------------------- */}
                 <p className="parText">User Name: {tweets[2].username}</p>
            <img src={tweets[2].logo} className="logoA"></img>
            <p className="parText">Tweets:</p>
            <ul>
            {tweets[2].tweets1.map(ele => 
                 <li key={ele+1}>{ele}</li>)}
                 </ul>
                 <hr className="line"/>
        </div>
        </>
    );

}

export default Tweets