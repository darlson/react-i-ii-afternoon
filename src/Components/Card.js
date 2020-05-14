import React from 'react'
// import data from '../data.js'

export default function Card ({person}) {
        return (
            <div>
                <div className='card-right'>
                    <h1>{person.id}/25</h1>
                </div>
                <div className='card-left'>
                    <h1>{person.name.first} {person.name.last}</h1>
                    <h3><b>From: </b>{person.city}, {person.country}</h3>
                    <h3><b>Job Title: </b>{person.title}</h3>
                    <h3><b>Employer: </b>{person.employer}</h3>
                    <br />
                    <h3><b>Favorite Movies: </b></h3>
                    <ol>
                        <li>{person.favoriteMovies[0]}</li>
                        <li>{person.favoriteMovies[1]}</li>
                        <li>{person.favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
    )
    
}