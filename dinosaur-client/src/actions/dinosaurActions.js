export const fetchDinosaurs = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_DINOSAURS_REQUEST' });
        fetch('http://localhost:3001/dinosaurs.json')
        .then(response => response.json())
        .then(dinosaurs => dispatch({ type: 'ADD_DINOSAURS', dinosaurs}))
    }
}