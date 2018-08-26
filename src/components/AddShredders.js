import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import SearchBar from 'react-native-search-bar'; 


class AddShredders extends Component {
    static navigationOptions = {
        headerStyle: {
                backgroundColor: '#dd7ac8'
        }
    };

    constructor(props) {
        super(props); 
        this.searchBar = React.createRef(); 
    }

    handleOnChangeText = () => {
        console.log('search shredders');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <SearchBar
                    ref={ref => (this.searchBar = ref)}                />
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

export default AddShredders; 

