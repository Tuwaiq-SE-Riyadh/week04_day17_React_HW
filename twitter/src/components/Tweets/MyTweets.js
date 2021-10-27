import React from "react";
import "./MyTweets.css";

// name ,image ,twwwis
function MyTweets({ name, image, tweets }) {
  return (
    <div className="tweett_continer">
      <h1> userName :{name}</h1>
      <img alt={name} src={image} className="imag_user" />
      {tweets.length && <h3 className="F">Ttweets:</h3>}
      {tweets.length &&
        tweets.map((x) => (
          <>
            <li>{x}</li>
          </>
        ))}
      <hr />
    </div>
  );
}

export default MyTweets;
