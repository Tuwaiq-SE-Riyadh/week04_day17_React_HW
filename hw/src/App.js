import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets';
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';


function App() {
  const Users = [
    {
        id:"1",
        name:"Ahmed",
        image:a,
        Tweets:['Example of a persons tweets']
    },
    {
        id:"2",
        name:"Omar",
        image:b,
        Tweets:['Example of a persons tweets']
    },
    {
        id:"3",
        name:"Tameem",
        image:c,
        Tweets:['Example of a persons tweets','Example of a persons tweets']
    },
];
  return (
    <>
    <div>

{
  Users.map(function(e){
   return <Tweets key={e.id} props={e} />
    })

}


    </div>
    </>
  );
}

export default App;
