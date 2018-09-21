import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Text, View } from 'react-native'; 

import { fetchShredderDetails } from '../actions'; 
import { Spinner } from './common'; 

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

    renderFetchDetailsError() {
        return (
            <View>
                <Text>Sorry, could not retrieve user details.</Text>
            </View>
        );
    }

    render() {
        const isFriend = this.props.navigation.getParam('isFriend'); 
        const { fetchingDetails, fetchingDetailsSuccess, 
                fetchingDetailsFail, details } = this.props; 

        return (
            <View style={styles.containerStyle}>
                {/*Just render Spinner while fetching details*/}
                {fetchingDetails && <Spinner size="large" />}

                {/*Fetching details successful, render user details*/}
                {fetchingDetailsSuccess &&
                    <View>
                        {/*Either render a friend or a non friend*/}
                        {isFriend && this.renderFriend(details)}
                        {!isFriend && this.renderNonFriend(details)}
                    </View>
                }

                {/*Fetching details not successful, render error message*/}
                {fetchingDetailsFail && this.renderFetchDetailsError()}
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

