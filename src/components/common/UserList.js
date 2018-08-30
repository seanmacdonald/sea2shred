import React, { Component } from 'react'; 
import { View, Text } from 'react-native'; 

import { CardSection } from '../common'; 

/*
    This component renders a list of users in alphabetical order. This 
    component assumes that each user element has the properties: uid, 
    firstName and lastName. 
*/
class UserList extends Component {
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
            <CardSection key={user.uid}>
                <Text>
                    {user.firstName} {user.lastName}
                </Text>
            </CardSection>
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
        
        //if the user array is empty then display the empty message
        if (users === undefined || users.length === 0) {
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

export { UserList }; 
