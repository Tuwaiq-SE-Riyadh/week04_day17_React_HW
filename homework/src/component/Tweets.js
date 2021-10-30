import './Tweets.css';


    let showObj = (arrayOfObj)=> arrayOfObj.map((e,i)=>{
        return <div key={i} id="card">
                    <p>User Name : <b>{e.name}</b></p>
                    <img src={e.image} alt="Tweets Images" width="50" height="50"/>
                    <p><b>Tweets :</b></p>
                    {e.tweets.map((ele , ind)=>{
                        return <li key={ind}>{ele}</li>
                    })}
                </div>
            
    })

    function Tweets({obj}) {
        return (
        <>
            {showObj(obj)}
        </>
        );
    }
    
    export default Tweets;
    