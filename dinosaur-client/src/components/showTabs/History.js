import React from 'react'

const History = ({dinosaur}) => {
    debugger
    return (
        <section className="section">
        <div className="container">

        <div className="columns">

        <div className="column is-6">
            <div className="box background-is-white">

            <p className="title is-1">{dinosaur.genus}</p>
            <p className="subtitle is-3">{dinosaur.grouping}</p>
            <br />

            <p className="subtitle is-4">Named by: {dinosaur.discovery_person}</p>
            <p className="subtitle is-4">First described in: {dinosaur.discovery_year}</p>
            </div>
        </div>
        
        </div>
        </div>
        </section>
    )    
}

export default History