function Tweets() {
    const tweets = [{
        name: 'Max', 
        image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
        tws: [{
            id:1, tw:'Be game-changer. the world is already full of players'}]
        },{
        name: 'ماجد', image: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        tws: [{
            id : 1, tw:"I have not failed. I have just found 10.000 ways that won't Worker. - thomas A Edison ."    }]
        },{
        name: 'Joudy',
        image: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
        tws: [{
            id: 1, tw : "If you look at what you have in life, you'll always have more. if you look at what you don't have in life, you'll never have enough",
            },{ 
            id :2, tw:"you will face many defeats in life, but never let yourself be defeated"
            }
        ]},
      ];
      
      return (
        
        <div className='menu'>
        {tweets.map((post) =>    
              <div className='card'>
              <h3>User Name: {post.name}</h3>
              <img src = {post.image}/>
              <h3>Tweets: </h3>
              <ul>{post.tws.map((t) => { return <li>{t.tw}</li>})}</ul> 
              <hr/>
              </div> )}
        </div>
    
      );
    }

export default Tweets;
