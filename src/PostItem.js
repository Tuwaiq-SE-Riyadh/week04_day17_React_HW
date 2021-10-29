import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";
function PosItem(name, img, array) {
  console.log(name);
  return (
    <>
      <div className="App">
        <div className="App-container">
          <p>Username: {name.name}</p>
          <img src={name.img} />
          <p>
            Tweets:
            {name.array.map((e) => {
              return <p>{e}</p>;
            })}
          </p>
        </div>
      </div>
    </>
  );
}
export default PosItem;
