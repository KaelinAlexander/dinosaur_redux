import dinosaursReducer from './dinosaursReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    loading: false,
    dinosaurs: dinosaursReducer
})

export default rootReducer