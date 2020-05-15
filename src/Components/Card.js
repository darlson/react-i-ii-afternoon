import React from 'react'
// import data from '../data.js'

export default function Card ({person}) {
        return (
            <div>
                <div className='card-right'>
                    <h2>{person.id}/25</h2>
                </div>
                <div className='card-left'>
                    <h1>{person.name.first} {person.name.last}</h1>
                    <h3><strong>From: </strong>{person.city}, {person.country}</h3>
                    <h3><strong>Job Title: </strong>{person.title}</h3>
                    <h3><strong>Employer: </strong>{person.employer}</h3>
                    <br />
                    <h3><strong>Favorite Movies: </strong></h3>
                    <ol>
                        <li>{person.favoriteMovies[0]}</li>
                        <li>{person.favoriteMovies[1]}</li>
                        <li>{person.favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
    )
    
}