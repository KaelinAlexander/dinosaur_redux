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

            }

        case 'DELETE_DINOSAUR':
            return {
                
            }

        default:
            return state;
    }
}

export default dinosaursReducer;