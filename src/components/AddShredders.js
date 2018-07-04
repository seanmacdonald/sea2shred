import React, { Component } from 'react'; 
import { Text } from 'react-native'; 


class AddShredders extends Component {
    static navigationOptions = {
        title: 'Add Shredders',
        headerTitleStyle: {
            color: 'red', 
            fontFamily: 'verdana' //TODO: fix fonts for all titles 
        },
        headerStyle: {
                backgroundColor: '#dd7ac8'
        }
    };

    render() {
        return (
            <Text>TODO: IMPLEMENT ADD SHREDDERS PAGE</Text> 
        );
    }
}

export default AddShredders; 

