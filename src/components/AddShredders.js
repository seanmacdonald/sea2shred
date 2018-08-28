import React, { Component } from 'react'; 
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'; 
import SearchBar from 'react-native-search-bar'; 

import { searchShredders } from '../actions'; 
import { Spinner, CardSection } from '../components/common'; 


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

    //compares friends by their last names
    compare = (friend1, friend2) => {
        if (friend1.lastName < friend2.lastName) {
            return -1; 
        }

        if (friend1.lastName > friend2.lastName) {
            return 1;
        }

        return 0;
    }

    renderFriendSection = (friend) => {
        return (
            <CardSection key={friend.uid}>
                <Text>
                    {friend.firstName} {' '} {friend.lastName}
                </Text>
            </CardSection>
        );
    }

    renderSearchResults = (searchResults) => {
        //first sort the friends array 
        searchResults.sort(this.compare);

        return (
        searchResults.map((friend) => 
            this.renderFriendSection(friend))
        );
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
                                    {this.renderSearchResults(searchResults)}
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

