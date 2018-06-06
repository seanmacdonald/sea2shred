import React from 'react'; 
import { Text, TouchableOpacity } from 'react-native'; 

const Button = ({ onPress, children }) => { //this onPress is the function from album detail
    const { buttonStyle, textStyle } = styles; 

    return (
        //onPress takes a function as a parameter 
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text> 
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1, //recall that flex 1 means i want this objec to
                //expand and fill as much content as possible 
        alignSelf: 'stretch',
        backgroundColor: '#fff', 
        borderRadius: 5, 
        borderWidth: 1,
        borderColor: '#007aff', //blueish 
        marginLeft: 5, 
        marginRight: 5

    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600', //specifies boldness  
        paddingTop: 10,
        paddingBottom: 10

    }
};


export { Button }; //can't used default because of how we did index.js file 

