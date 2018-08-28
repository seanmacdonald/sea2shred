import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import { connect } from 'react-redux'; 
import SearchBar from 'react-native-search-bar'; 

import { searchShredders } from '../actions'; 


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
        //TODO: modify parameters of searchShredders to have bounds 
        //      so that users can be searched for without having to 
        //      spell the users exact name when searching for them
        this.props.searchShredders(event); 
    }

    render() {
        console.log(this.props); 
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
        searchingShredders, 
        searchingShreddersSuccess, 
        searchingShreddersFail,
        friends
    } = state.shred;
    
    return {
        searchingShredders, 
        searchingShreddersSuccess, 
        searchingShreddersFail,
        friends
    };  
};

export default connect(MapStateToProps, {
    searchShredders
})(AddShredders); 

