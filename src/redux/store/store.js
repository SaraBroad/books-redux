import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/index';

export const history = createBrowserHistory()

export default function configureStore() {
    const store = createStore(
        createRootReducer(history),
        // can preload state
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
                // ... other middlewares ...
            )
        )
    )
    return store
}