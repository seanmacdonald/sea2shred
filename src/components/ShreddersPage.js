import React, { Component } from 'react'; 
import { View, Text } from 'react-native'; 
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

    rightIcon = (
            <Icon
                name='person-add'
                onPress={() => this.props.navigation.navigate('AddShredders')}
            />
        );

    render() {
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

export default ShreddersPage; 
