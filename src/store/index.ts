import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/Auth/authReducer'
import { uiReducer } from '../reducers/Ui/uiReducer'
import { notesReducer } from '../reducers/Notes/notesReducer'

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
