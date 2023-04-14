import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootREducer'
import thunk from 'redux-thunk'
import logger from './middleware/logger'

let store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;