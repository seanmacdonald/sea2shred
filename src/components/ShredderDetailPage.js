import React, { Component } from 'react'; 
import { Text, View } from 'react-native'; 

class ShredderDetailPage extends Component {
    static navigationOptions = {
        headerStyle: {
                backgroundColor: '#dd7ac8'
        }
    };

    render() {
        const uid = this.props.navigation.getParam('uid');
        console.log(`SHREDDER DETAILS FOR: ${uid}`);
        return (
            <View style={styles.containerStyle}>
                <Text>
                    TODO: Implement ShredderDetailPage
                </Text>
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

export default ShredderDetailPage;
