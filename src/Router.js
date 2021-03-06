import React, { Component } from 'react'; 
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'firebase';  
import { Icon } from 'react-native-elements'; 

 
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import MapPage from './components/MapPage';
import ShreddersPage from './components/ShreddersPage'; 
import AddShredders from './components/AddShredders'; 
import ShredderDetailPage from './components/ShredderDetailPage'; 
import SettingsPage from './components/SettingsPage';  
import { userLoggedIn, userNotLoggedIn } from './actions';
import { Spinner } from './components/common';  

class Router extends Component {
    componentWillMount() { 
        this.checkUserLoggedIn(); 
    }


    checkUserLoggedIn() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.userLoggedIn(); // there is a user logged in, so use HomeRouter 
            } else {
                this.props.userNotLoggedIn(); // there is no user logged in, so use GuestRouter
            }
        });
    }


    render() {
        //return <HomeRouter />;
        if (this.props.checkedLoginStatus) {
            //either render the HomeRouter or GuestRouter
            if (this.props.loggedIn) {
                return <HomeRouter />;
            }
            return <GuestRouter />;
        }

        //wait for the checkedLoginStatus flag 
        return <Spinner size='large' />; // TODO: replace with nice loading page
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
    Shredders Stack Navigator 
*/
const ShreddersStack = StackNavigator({
    Shredders: { 
        screen: ShreddersPage,
        navigationOptions: {
            header: null
        } 
    }, 
    AddShredders: { 
        screen: AddShredders 
    }, 
    ShredderDetails: {
        screen: ShredderDetailPage
    }
}, 
{
    initialRouteName: 'Shredders'
}); 


/*
    Home Routes (logged in)
*/
const HomeRouter = DrawerNavigator({
    Map: { screen: MapPage },

    //nested stack navigator for shredder page
    Shredders: { 
        screen: ShreddersStack,
        navigationOptions: {
            drawerLabel: 'Shredders',
            drawerIcon: () => (
              <Icon
                name='people'
              />
            )
          }
    },

    Settings: { screen: SettingsPage }
}, 
{
    initialRouteName: 'Map'
});


const mapStateToProps = (state) => {
    return {
            loggedIn: state.auth.loggedIn, 
            checkedLoginStatus: state.auth.checkedLoginStatus
        };
};


export default connect(mapStateToProps, {
    userLoggedIn, userNotLoggedIn
})(Router); 
