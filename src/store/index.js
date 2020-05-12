import { createStore, combineReducers,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {PokemonReducer} from '../reducers/PokemonReducer'



const rootReducer = combineReducers({
   pokemon: PokemonReducer
})


export default function configureStore() {  
    return createStore(
      rootReducer,
      applyMiddleware(thunk)
    );
  }

