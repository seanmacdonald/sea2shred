import React, { Component } from 'react'; 
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Icon } from 'react-native-elements';

import { Header, Button, CardSection } from './common'; 
import { userLoggedOut } from '../actions'; 

class SettingsPage extends Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: () => (
          <Icon
            name='settings'
          />
        ),
      };

    onLogputPress() {
        firebase.auth().signOut()
            .then(() => {
                console.log('sign out successful!');
                //this.props.navigation.navigate('login');
                userLoggedOut(); //call action creator for updating the loggedIn status flag  
            })
            .catch(() => {
                console.log('could not sign user out'); 
            }); 
    }

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} headerText='Settings' />
                <CardSection>
                    <Button onPress={this.onLogputPress.bind(this)}>Log Out</Button>  
                </CardSection>
            </View> 
        );
    }
}


export default SettingsPage; 
