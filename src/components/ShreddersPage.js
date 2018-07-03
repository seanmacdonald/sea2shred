import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Icon } from 'react-native-elements';

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

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} headerText='Shredders' />
            </View> 
        );
    }
}

export default ShreddersPage; 
