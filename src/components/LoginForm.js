import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { View, Text, TouchableWithoutFeedback } from 'react-native'; 
import { Actions } from 'react-native-router-flux'; 
import { loginEmailChanged, loginPasswordChanged, loginUser } from '../actions'; 
import { Card, CardSection, Input, Button, Spinner } from './common'; 

class LoginForm extends Component {
    //default state 
    state = { signupPressed: false }; 

    //Action creator tigger methods
    onEmailChange(text) {
        this.props.loginEmailChanged(text); 
    }

    onPasswordChange(text) {
        this.props.loginPasswordChanged(text); 
    }

    onSignupPress() {
        console.log('SIGN UP PAGE'); 
    }

    loginButtonPress() {
        const { email, password } = this.props; 

        this.props.loginUser({ email, password }); 
    }

    //Color text for 'sign up' functions 
    colorTextAndSignup() {
        this.setState({ signupPressed: true }); 
        Actions.newAccount(); 
    }

    resetText() {
        this.setState({ signupPressed: false });
    }

    renderSignupText() {
        if (this.state.signupPressed) {
            return (
                <Text style={styles.signupPressedStyle}>
                    Sign Up 
                </Text>
            );
        }

        return (
            <Text style={styles.signupNotPressedStyle}>
                    Sign Up 
                </Text>
        );
    }

    //Render button or spinner method 
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        
        return (
            <Button onPress={this.loginButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    //Render conditional error message 
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }

        return; 
    }

    render() {
        return (
            <Card>
                {/*Email Input Card Section*/}
                <CardSection>
                    <Input 
                        label="Email"
                        placeHolder="example@mail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                {/*Password Input Card Section*/}
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {/*Conditional Error Message*/}
                {this.renderError()}

                {/*Login Button Card Section*/}
                <CardSection>
                    {this.renderButton()} 
                </CardSection>

                {/*Signup Link Section*/}
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Text style={styles.sigupTextStyle}>
                        Don't have an account?
                    </Text>
                    <TouchableWithoutFeedback    
                        onPressIn={this.colorTextAndSignup.bind(this)} 
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

const mapStateToProps = (state) => {
    return {
        email: state.auth.email, 
        password: state.auth.password, 
        loading: state.auth.loading, 
        error: state.auth.error
    };  
};

const styles = {
    errorTextStyle: {
        fontSize: 20, 
        alignSelf: 'center', 
        color: 'red'
    }, 

    signupTextStyle: {
        fontSize: 16
    }, 

    signupPressedStyle: {
        color: '#3513bf', 
        textDecorationLine: 'underline'
    }, 

    signupNotPressedStyle: {
        color: '#007aff', 
        textDecorationLine: 'underline'
    }
};

export default connect(mapStateToProps, {
    loginEmailChanged, 
    loginPasswordChanged, 
    loginUser
})(LoginForm); 
