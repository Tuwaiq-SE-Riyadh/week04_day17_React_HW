import "./App.css";
import App from "./App";
import PostItem from "./PostItem";
function Tweets(account) {
  console.log(account.account);

  return (
    <>
      {account.account.map((element) => {
        return (
          <PostItem
            name={element.name}
            img={element.img}
            array={element.array}
          />
        );
      })}
    </>
  );
}
export default Tweets;
