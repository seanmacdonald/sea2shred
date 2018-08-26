import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { View, Text, ScrollView } from 'react-native'; 
import { Icon } from 'react-native-elements';

import { fetchShredders } from '../actions'; 
import { Header, Spinner, CardSection } from './common'; 

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

    componentWillUnmount() {
        console.log('shredders page unmounted'); 
    }

    rightIcon = (
            <Icon
                name='person-add'
                onPress={() => this.props.navigation.navigate('AddShredders')}
            />
        );

    //compares friends by their last names
    compare = (friend1, friend2) => {
        if (friend1.lastName < friend2.lastName) {
            return -1; 
        }

        if (friend1.lastName > friend2.lastName) {
            return 1;
        }

        return 0;
    }

    renderFriendSection = (friend) => {
        return (
            <CardSection key={friend.uid}>
                <Text>
                    {friend.firstName} {' '} {friend.lastName}
                </Text>
            </CardSection>
        );
    }

    renderFriends = (friends) => {
        //first sort the friends array 
        friends.sort(this.compare);

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
