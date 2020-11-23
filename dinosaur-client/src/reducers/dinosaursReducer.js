const dinosaursReducer = (state = { loading: false, dinosaurs: [] }, action) => {
    switch(action.type) {

        case 'START_ADDING_DINOSAURS_REQUEST':
            return {
                ...state,
                dinosaurs: [...state.dinosaurs],
                loading: true
            }

        case 'ADD_DINOSAURS':
            return {
                ...state,
                dinosaurs: action.dinosaurs,
                loading: false
            }

        case 'NEW_DINOSAUR':
            return {
                ...state,
                dinosaurs: [...state.dinosaurs, action.dinosaur ]
            }

        case 'DELETE_DINOSAUR':
            return {
                ...state,
                dinosaurs: state.dinosaurs.filter( dinosaur => dinosaur.id !== action.id )       
            }

        case 'UPDATE_DINOSAUR':
            let dinoToEdit = state.dinosaurs.find(dinosaur => dinosaur.id === action.dinosaur.id )
            let editedDino = action.dinosaur
            let indexOfDinoToEdit = state.dinosaurs.indexOf(dinoToEdit)
            debugger
            dinoToEdit = {
                ...dinoToEdit,
                genus: editedDino.genus,
                grouping: editedDino.grouping,
                meaning: editedDino.meaning,
                type_species: editedDino.type_species,
                discovery_year: editedDino.discovery_year,
                discovery_person: editedDino.discovery_person,
                size: editedDino.size,
                period: editedDino.period,
                distribution: editedDino.distribution,
                description: editedDino.description
            }
            if ( indexOfDinoToEdit > 0 ) {
                let firstHalfCopy = state.dinosaurs.slice(0, indexOfDinoToEdit)
                let lastHalfCopy = state.dinosaurs.slice(indexOfDinoToEdit + 1, state.dinosaurs.length)
                return {...state,
                        dinosaurs: [...firstHalfCopy, dinoToEdit, ...lastHalfCopy]
                        }
            } else {
                let lastHalfCopy = state.dinosaurs.slice(indexOfDinoToEdit + 1, state.dinosaurs.length)
                debugger
                    return {
                        ...state,
                        dinosaurs: [dinoToEdit, ...lastHalfCopy]
                    }
            }

        default:
            return state;
    }
}

export default dinosaursReducer;