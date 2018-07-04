import React, { Component } from 'react'; 
import { View, Text } from 'react-native'; 


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
            <View style={styles.containerStyle}>
                <Text>TODO: IMPLEMENT ADD SHREDDERS PAGE</Text> 
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: 'white', 
        flex: 1
    }
}; 

export default AddShredders; 

