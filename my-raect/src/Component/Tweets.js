import "./Tweets.css";

function Tweets() {
  const object = [
    {
      name: "Mansour",
      image:
        "https://i.pinimg.com/564x/e2/7c/72/e27c72f40f05c3d7fd2ca2247a6a5221.jpg",
      tweets: ["Be a game-changer.The world is alreeady full of players"],
    },
    {
      name: "Sara",
      image:
        "https://i.pinimg.com/564x/54/a0/7a/54a07a7d32f0b73c6c0c3b7af538d406.jpg",
      tweets: [
        "i have not faild i have jus found 10.00 ways that wont work-Thomes A edison",
      ],
    },
    {
      name: "joudy",
      image:
        "https://i.pinimg.com/564x/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.jpg",
      tweets: [
        "if you look at what you have in life,you 'll always have more if you look at what you dont have in life , you 'll never have enough-Oprah Winfrey",
        "you will face many defeats in life ,but never let yourself be defeated -Maya Angelou",
      ],
    },
  ];
  return (
    <div>
      {object.map((element) => (
        <div>
          <h1>User name : {element.name}</h1>
          <img src={element.image} />
          <h1>Tweats: </h1>
          <ul>
            {element.tweets.map((tweet) => (
              <li>{tweet}</li>
            ))}
          </ul>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default Tweets;
