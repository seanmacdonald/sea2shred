import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { View, Text, ScrollView } from 'react-native'; 
import { Icon } from 'react-native-elements';

import { fetchShredders, signupFirstNameChanged } from '../actions'; 
import { Header, Spinner } from './common'; 

class ShreddersPage extends Component {
    static navigationOptions = {
        drawerLabel: 'Shredders',
        drawerIcon: () => (
          <Icon
            name='people'
          />
        ),
      };

    componentDidMount() {
        //fetch all shredders that are friends with user
        this.props.fetchShredders();  
    }

    rightIcon = (
            <Icon
                name='person-add'
                onPress={() => this.props.navigation.navigate('AddShredders')}
            />
        );

    renderFriendSection = (friend) => {
        return (
            <Text>
                {friend.firstName}
            </Text>
        );
    }

    renderFriends = (friends) => {
        /*friends.forEach((thing) => {
            console.log('Hi');
            console.log(thing); 
            return this.renderFriendSection(thing);
        });*/
        return (
        friends.map((friend) => 
            this.renderFriendSection(friend))
        );
    }

    render() {
        console.log(this.props); 
        const { fetchingShredders, fetchingShreddersSuccess, friends } = this.props;
        return (
            <View style={styles.containerStyle}>
                <Header 
                    navigation={this.props.navigation} 
                    headerText='Shredders'
                    rightIcon={this.rightIcon} 
                />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    { fetchingShredders && <Spinner size='large' /> }
                    {
                        fetchingShreddersSuccess &&
                        <View>
                            <Text>Friends:</Text>
                            {this.renderFriends(friends)}
                        </View>
                    }
                </ScrollView>
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
        fetchingShredders, 
        fetchingShreddersSuccess, 
        fetchingShreddersFail, 
        friends
    } = state.shred; 

    return {
        fetchingShredders, 
        fetchingShreddersSuccess, 
        fetchingShreddersFail, 
        friends
    };
};

export default connect(MapStateToProps, {
    fetchShredders
})(ShreddersPage); 
