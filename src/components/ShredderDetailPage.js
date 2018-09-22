import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Text, View, TouchableHighlight } from 'react-native'; 

import { fetchShredderDetails } from '../actions'; 
import { Spinner, Card, CardSection } from './common'; 
import { Icon } from 'react-native-elements'; 

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

    onPressAddFriend() {
        console.log('ADD FRIEND PRESSED'); 
    }

    renderFriend(details) {
        console.log('Friend details:', details);
        return (
            <View>
                <CardSection style={styles.cardSectionOverride}>
                    <Text style={styles.nameTextStyle}>
                        {details.firstName} {details.lastName}
                    </Text>
                    <Text>
                        Status: (Skiing/Unknown)
                    </Text>
                </CardSection>
            </View> 
        );
    }

    renderNonFriend(details) {
        console.log('Non friend details:', details);
        return (
            <View>
                <CardSection style={styles.cardSectionOverride}>
                    <Text style={styles.nameTextStyle}>
                        {details.firstName} {details.lastName}
                    </Text> 
                    <TouchableHighlight onPress={this.onPressAddFriend.bind(this)}>
                        <View style={styles.addFriendView}>
                            <Text>ADD FRIEND</Text>
                        </View>
                    </TouchableHighlight>
                </CardSection>
            </View>
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
    }, 
    nameTextStyle: {
        fontSize: 24
    }, 
    cardSectionOverride: {
        padding: 20, 
        flexDirection: 'column'
    }, 
    addFriendView: {
        borderWidth: 1, 
        borderColor: 'black',
        backgroundColor: '#eaaedd', 
        flexDirection: 'row', 
        alignItems: 'center', //centers the text vertically
        justifyContent: 'center'
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

