import React from 'react'

export default function Navbar (props) {

    return (
        <div className='App-header'>
            <button className='home' onClick={props.home}>Home</button>
        </div>
    )
}