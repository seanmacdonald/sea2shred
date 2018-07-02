import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Icon } from 'react-native-elements';

import { Header } from './common'; 

class HomePage extends Component {
    /*static navigationOptions = {
        tabBarlabel: 'My Account'
    }*/
    static navigationOptions = {
        drawerLabel: 'Map',
        drawerIcon: () => (
          <Icon
            name='map'
          />
        ),
      };

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} headerText='Map' />
            </View> 
        );
    }
}

export default HomePage; 
