import React from 'react'

const Moviecard = (props) => {
    console.log('Props', props)
    return (
        <div className='movie-card'>
            <h1>Title {props.title}</h1>
            <h2>{props.producer}, {props.director} </h2>
            <p>Description{props.description}</p>
            <h4>{props.release_date}</h4>
        </div>
    )
}

export default Moviecard
