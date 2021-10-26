import "./App.css";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";

function tweet() {
  const account = [
    {
      name: "fahad",
      img: avatar1,
      array: ["be a game changer the world is already full of players"]
    },
    {
      name: "Ahmad",
      img: avatar2,
      array: ["“I’ve not failed. I’ve just found 10,000 ways that won’t work.” — Thomas Edison"],
    },
    {
      name: "Saleh",
      img: avatar3,
      array: ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"],
    },
    {
      name: "Faisal",
      img: avatar4,
      array: ["d vkla"],
    },
  ];

  let a = account.map((element) => {
    console.log(element.img);

    return (
      <div className="App-container">
        <p>Username: {element.name}</p>
        <img src={element.img} />
        <p>Tweets: {element.array}</p>
      </div>
    );
  });
  return <div className="App">{a}</div>;
}
export default tweet;
