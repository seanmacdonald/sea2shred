import React, { Component } from 'react'; 
import { View } from 'react-native';
import firebase from 'firebase';  

import { Header, Button, CardSection } from './common'; 

class SettingsPage extends Component {
    onLogputPress() {
        firebase.auth().signOut()
            .then(() => {
                console.log('sign out successful!');
                this.props.navigation.navigate('login');  
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
