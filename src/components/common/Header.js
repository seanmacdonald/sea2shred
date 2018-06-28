import React, { Component } from 'react';
import { Text, View } from 'react-native'; 
import { Icon } from 'react-native-elements';


class Header extends Component {
    render() {
        const { containerStyle, textStyle, iconStyle, textContainerStyle, iconContainerStyle } = styles; 
        return (
            <View style={containerStyle}>
                <View style={iconContainerStyle}>
                    <Icon
                        style={iconStyle} 
                        name='menu'
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>{this.props.headerText}</Text>
                </View>
            </View>
        ); 
    }
}


const styles = {
    textStyle: {
        alignItems: 'flex-end', 
        fontSize: 20
    },
    textContainerStyle: {
        flex: 2.1, 
        flexDirection: 'column',
        alignItems: 'center', 
        zIndex: 1
    },

    iconStyle: {
    },
    iconContainerStyle: {
        backgroundColor: '#F8F8F8', //greyish 
        alignItems: 'flex-start', 
        position: 'absolute', 
        top: 20, 
        left: 20,  
        zIndex: 2
    },

    containerStyle: {
        backgroundColor: '#F8F8F8', //greyish 
        flexDirection: 'row', 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'space-between'
    }
};


export { Header }; 
