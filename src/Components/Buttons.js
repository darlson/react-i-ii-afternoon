import React from 'react'

export default function Button (props) {

    return (
        <div className='bottom-buttons'>
          <button className='changePage' onClick={props.previous}>{"<"} Previous</button>
          <div>
            <button className='buttons'>Edit</button>
            <button className='buttons'>Delete</button>
            <button className='buttons'>New</button>
          </div>
          <button className='changePage' onClick={props.next}>Next ></button>
        </div>
    )
}