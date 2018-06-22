import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { View, Text, TouchableWithoutFeedback } from 'react-native'; 

import { Card, CardSection, Input, Button, Spinner } from './common';  
import { 
    signupFirstNameChanged, 
    signupLastNameChanged,
    signupEmailChanged, 
    signupPasswordChanged, 
    signupConfirmPasswordChanged, 
    signupUser
} from '../actions'; 

class SignupForm extends Component {
    /*
        default state
    */
    state = { signinPressed: false }; 


    /*
        Action Creator Trigger Methods
    */
    onFirstNameChange(text) {
        this.props.signupFirstNameChanged(text); 
    }

    onLastNameChange(text) {
        this.props.signupLastNameChanged(text); 
    }

    onEmailChange(text) {
        this.props.signupEmailChanged(text); 
    }

    onPasswordChange(text) {
        this.props.signupPasswordChanged(text); 
    }

    onConfirmPasswordChange(text) {
        this.props.signupConfirmPasswordChanged(text); 
    }

    signupButtonPress() {
        const { formData, navigation } = this.props; 

        this.props.signupUser({ formData, navigation }); 
    }


    /*
        Helper Methods
    */
    colorTextAndSignin() {
        this.setState({ signupPressed: true }); 
        this.props.navigation.navigate('login'); 
    }

    resetText() {
        this.setState({ signupPressed: false });
    }


    /*
        Helper Render Methods
    */
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }

        return (
            <Button onPress={this.signupButtonPress.bind(this)}>
                Sign Up
            </Button>
        );
    }

    renderSignupText() {
        if (this.state.signinPressed) {
            return (
                <Text style={styles.signinPressedStyle}>
                    Sign In 
                </Text>
            );
        }

        return (
            <Text style={styles.signinNotPressedStyle}>
                    Sign In 
                </Text>
        );
    }

    renderError() {
        const { error } = this.props; 

        if (error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {error}
                    </Text>
                </View>
            );
        }
    }


    /*
        Render Method 
    */
    render() {
        const { formData } = this.props; 

        return (
            <Card>
                {/*First Name Card Section*/}
                <CardSection>
                    <Input 
                        label="FirstName"
                        placeHolder="Jeff"
                        onChangeText={this.onFirstNameChange.bind(this)}
                        value={formData.firstName}
                    />
                </CardSection>

                {/*Last Name Card Section*/}
                <CardSection>
                    <Input 
                        label="LastName"
                        placeHolder="Jones"
                        onChangeText={this.onLastNameChange.bind(this)}
                        value={formData.lastName}
                    />
                </CardSection>

                {/*Email Input Card Section*/}
                <CardSection>
                    <Input 
                        label="Email"
                        placeHolder="jj@mail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={formData.email}
                    />
                </CardSection>

                {/*Password Input Card Section*/}
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={formData.password}
                    />
                </CardSection>

                {/*Password Input Card Section*/}
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeHolder="re-enter password"
                        onChangeText={this.onConfirmPasswordChange.bind(this)}
                        value={formData.confirmPassword}
                    />
                </CardSection>

                {/*Error Message*/}
                {this.renderError()}

                {/*Login Button Card Section*/}
                <CardSection>
                    {this.renderButton()} 
                </CardSection>

                {/*Signin Link Section*/}
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Text style={styles.sigupTextStyle}>
                        Already have an account?
                    </Text>
                    <TouchableWithoutFeedback    
                        onPressIn={this.colorTextAndSignin.bind(this)} 
                        onPressOut={this.resetText.bind(this)}
                    >
                        <View style={{ alignSelf: 'center' }}>
                            {this.renderSignupText()}
                        </View>
                    </TouchableWithoutFeedback>
                </View> 
            </Card>
        );
    }
}

/*
    Map State to Props
*/
const mapStateToProps = (state) => {
    const formData = {
        firstName: state.newAcc.firstName,
        lastName: state.newAcc.lastName,
        email: state.newAcc.email, 
        password: state.newAcc.password, 
        confirmPassword: state.newAcc.confirmPassword
    };

    return {
        formData, 
        loading: state.newAcc.loading,
        error: state.newAcc.error
    };  
};


/*
    Styles
*/
const styles = {
    errorTextStyle: {
        fontSize: 20, 
        alignSelf: 'center', 
        color: 'red'
    }, 
    signinPressedStyle: {
        color: '#3513bf', 
        textDecorationLine: 'underline'
    }, 

    signinNotPressedStyle: {
        color: '#007aff', 
        textDecorationLine: 'underline'
    }
};


/*
    Export and Connect to Store
*/
export default connect(mapStateToProps, {
    signupFirstNameChanged, 
    signupLastNameChanged,
    signupEmailChanged, 
    signupPasswordChanged, 
    signupConfirmPasswordChanged, 
    signupUser 
})(SignupForm); 
