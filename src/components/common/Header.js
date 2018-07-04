import React, { Component } from 'react';
import { Text, View } from 'react-native'; 
import { Icon } from 'react-native-elements';


class Header extends Component {
    render() {
        const { containerStyle, textStyle, textContainerStyle, 
                iconLeftContainerStyle, iconRightContainerStyle } = styles; 
        return (
            <View style={containerStyle}>

                {/*Left Icon (the menu icon)*/}
                <View style={iconLeftContainerStyle}>
                    <Icon
                        name='menu'
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>

                {/*Title*/}
                <View style={textContainerStyle}>
                    <Text style={textStyle}>{this.props.headerText}</Text>
                </View>

                {/*Right Icon (if there is one)*/}
                <View style={iconRightContainerStyle}>
                    {this.props.rightIcon}
                </View>
            </View>
        ); 
    }
}


const styles = {
    //text styles 
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

    //icon styling 
    iconLeftContainerStyle: {
        backgroundColor: '#dd7ac8', //pinkish 
        alignItems: 'flex-start', 
        position: 'absolute', 
        top: 30, 
        left: 20,  
        zIndex: 2
    },
    iconRightContainerStyle: {
        backgroundColor: '#dd7ac8', //pinkish  
        alignItems: 'flex-start', 
        position: 'absolute', 
        top: 30, 
        right: 20,  
        zIndex: 2
    },

    //container styling
    containerStyle: {
        backgroundColor: '#dd7ac8', //pinkish   //'#F8F8F8', //greyish 
        flexDirection: 'row', 
        height: 65, 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingTop: 15
    }
};


export { Header }; 
