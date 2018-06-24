import React, { Component } from 'react'; 
import { View } from 'react-native'; 

import { Header } from './common'; 

class HomePage extends Component {
    /*static navigationOptions = {
        tabBarlabel: 'My Account'
    }*/

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} headerText='Map' />
            </View> 
        );
    }
}

export default HomePage; 
