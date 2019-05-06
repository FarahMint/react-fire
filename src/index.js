import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from  "./store/reducers/rootReducer"
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware,compose} from "redux";
import thunk  from "redux-thunk";
import{ reduxFirestore, getFirestore} from "redux-firestore";
import{ reactReduxFirebase, getFirebase} from "react-redux-firebase";
import fb_config from "./config/fb_config"


// react-redux-firebase config
 // user firestore db to sync to profile obj
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady:true
  }

 
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fb_config),
        reactReduxFirebase(fb_config,rrfConfig)

    ));

store.firebaseAuthIsReady.then(()=>{
ReactDOM.render(<Provider store={store}>< App/></Provider>,document.getElementById('root'))
serviceWorker.unregister();}
)
