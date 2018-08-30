import React, { Component } from 'react'; 
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'; 
import SearchBar from 'react-native-search-bar'; 

import { searchShredders } from '../actions'; 
import { Spinner, CardSection, UserList } from '../components/common'; 


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
        //      spell the users exact name when searching for them.
        //      Also, currently only last names can only be used to search
        //      for users. Should be able to search first names as well. 
        this.props.searchShredders(event); 
    }

    render() {
        console.log(this.props); 

        const { searchingShredders, searchingShreddersSuccess, 
                searchingShreddersFail, searchResults } = this.props; 
        return (
            <View style={styles.containerStyle}>
                {/*Only render spinner while searching for shredders*/}
                { searchingShredders && <Spinner /> }

                { 
                    !searchingShredders &&
                    <View>
                        <SearchBar
                            ref={ref => (this.searchBar = ref)}       
                            placeholder="Search"     
                            onSearchButtonPress={this.handleSearchButtonPress.bind(this)}
                        />

                        <ScrollView 
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            {/*Render the results from the search if it was a success*/}
                            {
                                searchingShreddersSuccess &&
                                <View>
                                    <UserList 
                                        users={searchResults}
                                        emptyMessage='Sorry, no results were found.'
                                    />
                                </View>
                            }

                            {/*Otherwise render error message if the search was not a success*/}
                            {
                                searchingShreddersFail &&
                                <Text>There was an error</Text>
                            }
                        </ScrollView>
                    </View>
                }
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
        friends, 
        searchResults
    } = state.shred;
    
    return {
        searchingShredders, 
        searchingShreddersSuccess, 
        searchingShreddersFail,
        friends, 
        searchResults
    };  
};

export default connect(MapStateToProps, {
    searchShredders
})(AddShredders); 

