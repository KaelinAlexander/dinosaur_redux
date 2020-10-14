export const fetchDinosaurs = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_DINOSAURS_REQUEST' });
        fetch('http://localhost:3001/dinosaurs.json')
        .then(response => response.json())
        .then(dinosaurs => dispatch({ type: 'ADD_DINOSAURS', dinosaurs}))
    }
}

export const newDinosaur = (formData) => {
    debugger
    return (dispatch) => {
        const strongParams = {
            dinosaur: {
                genus: formData.genus,
                grouping: formData.grouping,
                meaning: formData.meaning,
                type_species: formData.type_species,
                discovery_year: formData.discovery_year,
                discovery_person: formData.discovery_person,
                size: formData.size,
                period: formData.period,
                distribution: formData.distribution,
                description: formData.description
            }
        }
        fetch('http://localhost:3001/dinosaurs.json', {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        })
        .then(response => response.json())
        .then(dinosaur => dispatch({ type: 'NEW_DINOSAUR', dinosaur}))
    }
}

export const deleteDinosaur = (id) => {
    return (dispatch) => {
        fetch('http://localhost:3001/dinosaurs/' + id, {
            method: "DELETE"
        })
        .then(response => console.log(response))
        .then(dinosaur => dispatch({ type: 'DELETE_DINOSAUR', id }))
    }
}

export const editDinosaur = (formData) => {
    return (dispatch) => {
        const strongParams = {
            dinosaur: {
                genus: formData.genus,
                grouping: formData.grouping,
                meaning: formData.meaning,
                type_species: formData.type_species,
                discovery_year: formData.discovery_year,
                discovery_person: formData.discovery_person,
                size: formData.size,
                period: formData.period,
                distribution: formData.distribution,
                description: formData.description
            }
        }
        fetch('http://localhost:3001/dinosaurs/' + formData.id, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        })
        .then(resp => resp.json())
        .then(dinosaur => dispatch({ type: 'UPDATE_DINOSAUR', dinosaur}))
    }
}