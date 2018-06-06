import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import firebase from 'firebase'; 
import ReduxThunk from 'redux-thunk'; 
import reducers from './reducers'; 
import Router from './Router'; 

class App extends Component {
    componentWillMount() {
        // TODO: configure firebase; 
    }

    render() {
        //setup proivider with store 
        return (null); 
    }

}

export default App; 
