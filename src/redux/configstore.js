import { combineReducers, createStore } from "redux"
import {DatVeXemPhimReducer} from './reducer/DatVeXemPhimReducer'

const rootReducer = combineReducers({
    DatVeXemPhim: DatVeXemPhimReducer,
})

export const store = createStore(rootReducer);