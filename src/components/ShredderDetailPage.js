import React, { Component } from 'react'; 
import { Text } from 'react-native'; 

class ShredderDetailPage extends Component {
    render() {
        const uid = this.props.navigation.getParam('uid');
        console.log(`SHREDDER DETAILS FOR: ${uid}`);
        return (
            <Text>
                TODO: Implement ShredderDetailPage
            </Text>
        );
    }
}

export default ShredderDetailPage;
