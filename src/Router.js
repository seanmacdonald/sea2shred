import React from 'react'; 
import { Scene, Router } from 'react-native-router-flux'; 
import LoginForm from './components/LoginForm'; 
import HomePage from './components/HomePage'; 

const RouterComponent = () => {
    //TODO: update to latest version of react-native-router-flux 
    //      when it is no longer in beta 
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            {/*Authentication Scene*/}
            <Scene key="auth">
                <Scene 
                    key="login" 
                    component={LoginForm}
                    title="Login"
                    initial
                />
            </Scene>

            {/*Main Scene*/}
            <Scene key="main">
                <Scene
                    key="homePage"
                    component={HomePage}
                    title="Home"
                    initial
                />
            </Scene>
        </Router>
    );
}; 

export default RouterComponent; 
