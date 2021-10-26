function Tweets({name,image, tweet}) {
    return (
    <div className="tweet">
        <p>User name: {name}</p>
        <img src= {image}></img>
        {/* <li>{tweet}</li> */}
        <ul>
            {tweet}
        </ul>
    </div>);
}


export default Tweets;