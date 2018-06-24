import React, { Component } from 'react';
import { Text, View } from 'react-native'; 
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';  


class Header extends Component {
    render() {
        const { viewStyle, textStyle } = styles; 
        return (
            <View style={viewStyle}>
                <Icon 
                    name='menu'
                    onPress={() => this.props.navigation.openDrawer()}
                />
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        ); 
    }
}


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8', //greyish 
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15, 
        shadowColor: '#000', //black
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative', 
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20
    }
};


/*
backgroundColor: '#F8F8F8', //greyish 
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15, 
        shadowColor: '#000', //black
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'
*/

export { Header }; 
