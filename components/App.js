import'./app.css';
import Listitem from './components/Listitem';


const listitem = [{
  name: 'Max', 
  image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
  tws: [{ id:u1, tw:'Be game-changer. the world is already full of players'}]
  },{
  name: 'ماجد', image: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
  tws: [{ id : u1, tw:"I have not failed. I have just found 10.000 ways that won't Worker. - thomas A Edison ."    }]
  },{
  name: 'Joudy',
  image: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
  tws: [{id: u1, tw : "If you look at what you have in life, you'll always have more. if you look at what you don't have in life, you'll never have enough",
      },{ 
      id :u2, tw:"you will face many defeats in life, but never let yourself be defeated"
      }
  ]},
];

function App() {
  return (
<Listitem listitem ={listitem}/>
    

  );
}
  export default App;

