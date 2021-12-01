import React from 'react'

function School({ SchoolName, Rate, Review, Count,name,major }) {
    return (
        /* School Result */
        <div class="card mb-3">
            <div class="card-body" >
                <div class="mx-3">
                <h3>{SchoolName}</h3>
                <h5>{name}</h5>
                <p>{major}</p>
                <div class="mt-1"><strong>{Rate}</strong></div>
                </div>
                <ul class="list-group list-group-flush mt-2">
                <li class="list-group-item">{Review}</li>
                <li class="list-group-item font-italic">{Count}</li>
                </ul>
            </div>
        </div>
    )
}

export default School
