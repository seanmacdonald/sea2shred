import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Text, View } from 'react-native'; 

import { fetchShredderDetails } from '../actions'; 

class ShredderDetailPage extends Component {
    static navigationOptions = {
        headerStyle: {
                backgroundColor: '#dd7ac8'
        }
    };

    componentWillMount() {
        const uid = this.props.navigation.getParam('uid');
        const isFriend = this.props.navigation.getParam('isFriend'); 

        this.props.fetchShredderDetails(uid, isFriend); 
    }

    renderFriend(details) {
        console.log('Friend details:', details);
        return (
            <Text>Friend Info</Text>
        );
    }

    renderNonFriend(details) {
        console.log('Non friend details:', details);
        return (
            <Text>Non Friend Info</Text>
        );
    }

    render() {
        const uid = this.props.navigation.getParam('uid');
        const isFriend = this.props.navigation.getParam('isFriend'); 
        const { details } = this.props; 

        return (
            <View style={styles.containerStyle}>
                {/*Either render a friend or a non friend*/}
                {isFriend && this.renderFriend(details)}
                {!isFriend && this.renderNonFriend(details)}
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

const MapStateToProps = (state) => {
    const {
        fetchingDetails, 
        fetchingDetailsSuccess, 
        fetchingDetailsFail, 
        details 
    } = state.shred; 

    return {
        fetchingDetails, 
        fetchingDetailsSuccess, 
        fetchingDetailsFail, 
        details 
    };
};

export default connect(MapStateToProps, {
    fetchShredderDetails
})(ShredderDetailPage); 

