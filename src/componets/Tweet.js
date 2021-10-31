import React from 'react'

function Tweet({elementImage ,elementName ,elementData, kayIndex}) {
    return (
        <div kay={kayIndex}>
        <img src={elementImage}/>
        <br/>
        {elementName}
         <br/>
         {elementData}
          <hr/>
        </div>
    )
}

export default Tweet
