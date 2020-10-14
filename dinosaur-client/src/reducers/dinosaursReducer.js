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
            let dinoToEdit = state.dinosaurs.find(dinosaur => dinosaur.id === action.id )
            debugger
            return {
                
            }            

        default:
            return state;
    }
}

export default dinosaursReducer;