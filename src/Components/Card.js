import React from 'react'
// import data from '../data.js'

export default function Card ({person}) {
        return (
            <div className='card'>
                <div className='card-right'>
                    <h2>{person.id}/25</h2>
                </div>
                <div className='card-left'>
                    <h2>{person.name.first} {person.name.last}</h2>
                    <h4><span>From: </span>{person.city}, {person.country}</h4>
                    <h4><span>Job Title: </span>{person.title}</h4>
                    <h4><span>Employer: </span>{person.employer}</h4>
                    <br />
                    <h4><span>Favorite Movies: </span></h4>
                    <ol>
                        <li>{person.favoriteMovies[0]}</li>
                        <li>{person.favoriteMovies[1]}</li>
                        <li>{person.favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
    )
    
}