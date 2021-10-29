const Tweet = ({tweet}) => {
    return(
        <>
            {tweet.map((element,index)=>{
                return(
                    <div className="tweet" key={index}>
                        <p>User Name : {element.username}</p>
                        <img width="80" src={element.pic}></img>
                        <ul>
                            <li>{element.list1}</li>
                            {element.list2?<li>{element.list2}</li>:""}

                        </ul>
                        <hr/>
                    </div>
                )
            })}

        </>
    )
    
}
export default Tweet;



/*

return(
        tweet.map((element,index)=>{
           return (
                <>
                    <p>User Name : {element.username}</p>
                    <img src={element.pic}></img>
                    <ul>
                        
                        <li>{element.list1}</li>
                    
                        <li>{element.list2}</li>
                        
                        
                        </ul>
                </>
            )
        }
        
    )




*/ 