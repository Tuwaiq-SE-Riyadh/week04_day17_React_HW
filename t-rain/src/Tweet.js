const Tweet = ({username,pic,list}) => {
    return(
        <>
           
                
                    <div className="tweet" >
                        <p>User Name : {username}</p>
                        <img width="80" src={pic}></img>
                        <ul>
                        
                            <> {list}</>
        
                        </ul>
                        <hr/>
                    </div>
                
            

        </>
    )
    
}
export default Tweet;



