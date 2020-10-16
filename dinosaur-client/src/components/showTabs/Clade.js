import React from 'react'
import Ankylosaur from './clades/Ankylosaur'
import Ceratopsid from './clades/Ceratopsid'
import Ornithopod from './clades/Ornithopod'
import Pachycephalosaur from './clades/Pachycephalosaur'
import Prosauropod from './clades/Prosauropod'
import Sauropod from './clades/Sauropod'
import Theropod from './clades/Theropod'
import Unknown from './clades/Unknown' 

const Clade = ({dinosaur}) => {


    if ( dinosaur.grouping === "Theropod" ) {
        return (
            <Theropod />
        )
    } else if ( dinosaur.grouping === "Ankylosaur") {
        return (
            <Ankylosaur />
        )
    } else if ( dinosaur.grouping === "Ceratopsid") {
        return (
            <Ceratopsid />
        )
    } else if ( dinosaur.grouping === "Ornithopod") {
        return (
            <Ornithopod />
        )
    } else if ( dinosaur.grouping === "Pachycephalosaur") {
        return (
            <Pachycephalosaur />
        )
    } else if ( dinosaur.grouping === "Prosauropod") {
        return (
            <Prosauropod />
        )
    } else if ( dinosaur.grouping === "Sauropod") {
        return (
            <Sauropod />
        )
    } else if ( dinosaur.grouping === "Unknown") {
        return (
            <Unknown />
        )
    }
}

export default Clade