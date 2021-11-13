import './App.css';


function Tweets(props) {
    return (
        <div className="List">
            {props.map((post) =>
                <div className='item'>
                    <h1>{props.userName}</h1><img src={post.image} /><h1>Tweets:</h1><h1>{props.tweets} </h1>
                    <hr />
                </div>)}
        </div>);
}


export default Tweets;




