import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store


// !Reducer returns an object
// !Thunk returns another function