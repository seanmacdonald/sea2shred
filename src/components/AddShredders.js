import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import { connect } from 'react-redux'; 
import SearchBar from 'react-native-search-bar'; 

import searchShredders from '../actions'; 


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

    handleSearchButtonPress = (event) => {
        console.log('search shredders');
        console.log(event);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <SearchBar
                    ref={ref => (this.searchBar = ref)}       
                    placeholder="Search"     
                    onSearchButtonPress={this.handleSearchButtonPress.bind(this)}
                />
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
    const { 
        friends
    } = state.shred;
    
    return {
        friends
    };  
};

export default connect(MapStateToProps, {
    searchShredders
})(AddShredders); 

