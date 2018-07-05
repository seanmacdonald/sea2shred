import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { View, Text } from 'react-native'; 
import { Icon } from 'react-native-elements';

import { fetchShredders } from '../actions'; 
import { Header } from './common'; 

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

    render() {
        console.log(this.props.loading); 
        return (
            <View style={styles.containerStyle}>
                <Header 
                    navigation={this.props.navigation} 
                    headerText='Shredders'
                    rightIcon={this.rightIcon} 
                />
                <Text>TODO: IMPLEMENT SHREDDERS PAGE</Text>
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
    return {
        loading: state.shred.loading
    };
};

export default connect(MapStateToProps, {
    fetchShredders
})(ShreddersPage); 
