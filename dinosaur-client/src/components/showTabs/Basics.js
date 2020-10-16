import React from 'react'

const Basics = ({dinosaur}) => {
    debugger
    return (
        <section className="section">
        <div className="container">

        <div className="columns">

        <div className="column">
            <div className="box background-is-white">

            <p className="title is-1">{dinosaur.genus}</p>
            <p className="subtitle is-3">{dinosaur.grouping}</p>
            <br />

            <p className="subtitle is-4">Size: {dinosaur.size} meters</p>
            <p className="subtitle is-4">Distribution: {dinosaur.distribution} meters</p>
            <p className="subtitle is-4">Lived during the {dinosaur.period}</p>
            </div>
        </div>
        
        <div className="column mt-4">

        <p className="title is-5">Name means: "{dinosaur.meaning}"</p>
        <p className="subtitle is-5">Type species: <i>{dinosaur.type_species}</i></p>

        <br />
        <p className="is-medium">{dinosaur.description}</p>

        </div>
        
        </div>
        </div>
        </section>
    )    
}

export default Basics