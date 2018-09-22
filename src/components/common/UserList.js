import React, { Component } from 'react'; 
import { View, Text, TouchableHighlight } from 'react-native';
import firebase from 'firebase';  

import { CardSection } from '../common'; 

/*
    This component renders a list of users in alphabetical order. This 
    component assumes that each user element has the properties: uid, 
    firstName and lastName. 
*/
class UserList extends Component {
    onPressUserSection(uid) {
        let isFriend = false; 
        this.props.friends.forEach(element => {
            if (element.uid === uid) {
                isFriend = true; 
            }
        });
        
        this.props.navigation.navigate('ShredderDetails', {
            uid, 
            isFriend
        });
    }

    //function to compare users by their last names
    compare = (user1, user2) => {
        if (user1.lastName < user2.lastName) {
            return -1; 
        }

        if (user1.lastName > user2.lastName) {
            return 1;
        }

        return 0;
    }

    renderUserSection = (user) => {
        return (
            <TouchableHighlight onPress={this.onPressUserSection.bind(this, user.uid)} key={user.uid}> 
                <CardSection>
                    <Text style={styles.textStyle}>
                        {user.firstName} {user.lastName}
                    </Text>
                </CardSection>
            </TouchableHighlight>
        );
    }

    renderUserList = (users) => {
        //sort the users array by last name
        users.sort(this.compare);

        return (
            users.map((user) => 
                this.renderUserSection(user))
        );
    }

    render() {
        const { users, emptyMessage } = this.props;

        //remove the current user from the list if it is in it 
        const currentUser = firebase.auth().currentUser; 
        const currentUserUid = currentUser.uid;
        const usersFiltered = users.filter((user) => {
            return user.uid !== currentUserUid;
        });
        
        //if the user array is empty then display the empty message
        if (usersFiltered === undefined || usersFiltered.length === 0) {
            return (
                <View> 
                    <Text>{emptyMessage}</Text>
                </View>
            );
        }
        
        //otherwise display all the users
        return (this.renderUserList(this.props.users));
    }
}


const styles = {
    textStyle: {
        fontSize: 16, 
        paddingTop: 3,
        paddingBottom: 3
    }
};

export { UserList }; 
