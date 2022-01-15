import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import  {cartreducer} from './reducers/cartreducers.js'
import thunk from 'redux-thunk'

const reducer=combineReducers({
    cart:cartreducer
})


const initialstate={
cart:{
    cartitems: localStorage.getItem('cartitems')
    ?JSON.parse(localStorage.getItem('cartitems'))
    :[],
}

};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store=createStore(
    reducer ,
    initialstate ,
    composeEnhancers(applyMiddleware(thunk))
    )

export default store