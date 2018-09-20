import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { View, Text, ScrollView } from 'react-native'; 
import { Icon } from 'react-native-elements';

import { fetchShredders } from '../actions'; 
import { Header, Spinner, CardSection, UserList } from './common'; 

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

    render() {
        console.log('ShreddersPage render');
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
                        <UserList
                            users={friends}
                            friends={friends}
                            emptyMessage='Click the add person icon to find and add your friends!'
                            navigation={this.props.navigation}
                        />
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
        friends //note that friends are shredders that are friends with this user
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
