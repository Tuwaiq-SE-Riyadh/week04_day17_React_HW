function Tweets({tweets}) {      
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
