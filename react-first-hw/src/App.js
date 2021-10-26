
import './App.css';

function App() {

  const info = [
    {name:"User name: Max", image:"https://png.pngtree.com/thumb_back/fh260/back_our/20200817/ourmid/pngtree-flat-customer-service-after-sales-service-poster-vector-background-png-image_394524.jpg", tweets:"Be a game-charger. The world is already full of players"},
    {name:"User name: ماجد", image:"https://png.pngtree.com/thumb_back/fh260/back_our/20200817/ourmid/pngtree-flat-customer-service-after-sales-service-poster-vector-background-png-image_394524.jpg", tweets:"I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison"},
    {name:"User name: Joudy", image:"https://a7.pnghunt.com/preview/295/419/800/neck-communication-facial-hair-operator-customer-service.jpg", tweets:["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
     "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou"]}
  ]

  const print = info.map((item) => {
  return (
    <div className="App">
      <p>{item.name}</p>
      <img src={item.image}/>
      <p>{item.tweets}</p>
    </div>
  );
  }
  )
}

export default App;
