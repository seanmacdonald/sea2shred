import React, { Component } from 'react'; 
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'firebase';  

 
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage'; 
import { userLoggedIn, userNotLoggedIn } from './actions'; 

class Router extends Component {
    constructor(props) {
        super(props);

        // check if a user is already logged in 
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.userLoggedIn(); // there is a user logged in, so use HomeRouter 
            } else {
                this.props.userNotLoggedIn(); // there is no user logged in, so use GuestRouter
            }
        });
    }

    render() {
        if (this.props.loggedIn) {
            return <HomeRouter />;
        }

        return <GuestRouter />;
    }
} 


/*
    Guest Routes (not logged in)
*/
const GuestRouter = StackNavigator({
    login: { screen: LoginForm }, 
    signup: { screen: SignupForm }
}, 
{
    initialRouteName: 'login'
});


/*
    Home Routes (logged in)
*/
const HomeRouter = StackNavigator({
    homePage: { screen: HomePage }
}, 
{
    initialRouteName: 'homePage'
});

const mapStateToProps = (state) => {
    return {
            loggedIn: state.auth.loggedIn
        };
};

export default connect(mapStateToProps, {
    userLoggedIn, userNotLoggedIn
})(Router); 
