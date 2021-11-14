
function TweetsList(props) {

    return (
        <>
        {/* {console.log("my array is " , props.tweetsArray)} */}
        
        {/* showing the array of tweets */}
        {props.tweetsArray.map((element, index) => {
              return <ul>
                        <li>{element}</li>
                    </ul>
          })}
        </>
    );
  }
  export default TweetsList;