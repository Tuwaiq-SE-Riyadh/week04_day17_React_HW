import logo from "./logo.svg";
import "./App.css";
import Tweets from "./Tweets";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";

function App() {
  const account = [
    {
      name: "fahad",
      img: avatar1,
      array: ["be a game changer the world is already full of players"],
    },
    {
      name: "Ahmad",
      img: avatar2,
      array: [
        "“I’ve not failed. I’ve just found 10,000 ways that won’t work.” — Thomas Edison",
      ],
    },
    {
      name: "Saleh",
      img: avatar3,
      array: [
        "If you look at what you have in life, you'll always have more",
        "be a game changer the world is already full of players",
      ],
    },
    {
      name: "Faisal",
      img: avatar4,
      array: [
        "Despite everything, I believe that people are really good at heart.",
        "They're only truly great who are truly good.",
      ],
    },
  ];
  console.log(account);

  return (
    <>
      <div className="App-container">
        <Tweets account={account} />
      </div>
    </>
  );
}

export default App;
