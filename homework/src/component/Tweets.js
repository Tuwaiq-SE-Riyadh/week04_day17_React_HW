import './Tweets.css';

    let obj = [
        {
        name:"saad",
        image:"https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png",
        tweets:["first Tweets : Saad", "2's Tweets : Saad","3th Tweets : Saad"]
        },
        {
        name:"fahad",
        image:"https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png",
        tweets:["first Tweets : fahad", "2's Tweets : fahad"]
        },
        {
        name:"shahad",
        image:"https://cdn-icons-png.flaticon.com/512/146/146025.png",
        tweets:["first Tweets : shahad"]
        },
    ]

    let showObj = obj.map((e,i)=>{
        return <div key={i} id="card">
                    <p>User Name : <b>{e.name}</b></p>
                    <img src={e.image} alt="Tweets Images" width="50" height="50"/>
                    <p><b>Tweets :</b></p>
                    {e.tweets.map((ele , ind)=>{
                        return <li key={ind}>{ele}</li>
                    })}
                </div>
            
    })

    function Tweets() {
        return (
        <>
            {showObj}
        </>
        );
    }
    
    export default Tweets;
    