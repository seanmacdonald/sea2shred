import React, { Component } from 'react'; 
import { Text } from 'react-native'; 

import { CardSection } from '../common'; 

/*
    This component renders a list of users in alphabetical order. This 
    component assumes that the given user array is not empty and that each 
    user element has the properties: uid, firstName and lastName. 
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
        return (this.renderUserList(this.props.users));
    }
}

export { UserList }; 
