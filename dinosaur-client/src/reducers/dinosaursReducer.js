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

        default:
            return state;
    }
}

export default dinosaursReducer;