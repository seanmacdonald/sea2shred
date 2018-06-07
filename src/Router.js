import React from 'react'; 
import { Scene, Router, Actions } from 'react-native-router-flux'; 
//import LoginForm from './components/LoginForm'; 
import LoginForm from './components/LoginForm'; 

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene 
                    key="login" 
                    component={LoginForm}
                    title="Please Login"
                    initial
                />
            </Scene>
        </Router>
    );
}; 

export default RouterComponent; 
