import React from 'react'; 
import { StackNavigator } from 'react-navigation'; 
 
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage'; 

// TODO: remove homepage from this stack navigator. Use a drawer navigator when user is signed in
const Router = StackNavigator({
    login: { screen: LoginForm }, 
    signup: { screen: SignupForm }, 
    homepage: { screen: HomePage }
}, 
{
    initialRouteName: 'login'
});


export default Router; 
