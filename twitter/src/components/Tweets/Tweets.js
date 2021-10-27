import React from "react";
import MyTweets from "./MyTweets";

function Tweets(tweets) {
  let logo = `${window.location.origin}/logo.png`;
  let logo1 = `${window.location.origin}/logo1.png`;
  let logo2 = `${window.location.origin}/logo2.png`;
  const data = [
    {
      name: "Max",
      image: logo,
      tweets: ["Be a game. The world is already full of players."],
    },
    {
      name: "Majed",
      image: logo1,
      tweets: [
        "I have not failed. I've just found 10,000 ways that wont't work - Thomas A.Edison",
      ],
    },
    {
      name: "Joudy",
      image: logo2,
      tweets: [
        "If you look at what you have in life, you'll alawys have more. If you look at what you don't have in life, you'll never have enough, -Oprah Winfrey",
        "you will face many defeats in life, but never let yourself be defected. -Maya Angelou",
      ],
    },
  ];
  return (
    <div className="wrraper_continer">
      {data.length && data.map((x, index) => <MyTweets key={index} {...x} />)}
    </div>
  );
}

export default Tweets;
