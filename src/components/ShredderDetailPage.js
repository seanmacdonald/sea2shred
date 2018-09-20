import React, { Component } from 'react'; 
import { Text, View } from 'react-native'; 

class ShredderDetailPage extends Component {
    static navigationOptions = {
        headerStyle: {
                backgroundColor: '#dd7ac8'
        }
    };

    renderFriend() {
        return (
            <Text>Friend Info</Text>
        );
    }

    renderNonFriend() {
        return (
            <Text>Non Friend Info</Text>
        );
    }

    render() {
        const uid = this.props.navigation.getParam('uid');
        const isFriend = this.props.navigation.getParam('isFriend'); 
        console.log(`SHREDDER DETAILS FOR: ${uid}`);

        return (
            <View style={styles.containerStyle}>
                {/*Either render a friend or a non friend*/}
                {isFriend && this.renderFriend()}
                {!isFriend && this.renderNonFriend()}
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
