import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { Card, CardSection, Input } from './common';  
import { 
    signupFirstNameChanged, 
    signupLastNameChanged,
    signupEmailChanged, 
    signupPasswordChanged, 
    signupConfirmPasswordChanged
} from '../actions'; 

class SignupForm extends Component {
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

    render() {
        return (
            <Card>
                {/*First Name Card Section*/}
                <CardSection>
                    <Input 
                        label="FirstName"
                        placeHolder="First Name"
                        onChangeText={this.onFirstNameChange.bind(this)}
                        value={this.props.firstName}
                    />
                </CardSection>

                {/*Last Name Card Section*/}
                <CardSection>
                    <Input 
                        label="LastName"
                        placeHolder="Last Name"
                        onChangeText={this.onLastNameChange.bind(this)}
                        value={this.props.lastName}
                    />
                </CardSection>

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

                {/*Password Input Card Section*/}
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeHolder="re-enter password"
                        onChangeText={this.onConfirmPasswordChange.bind(this)}
                        value={this.props.confirmPassword}
                    />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.newAcc.firstName,
        lastName: state.newAcc.lastName,
        email: state.newAcc.email, 
        password: state.newAcc.password, 
        confirmPassword: state.newAcc.confirmPassword
    };  
};

export default connect(mapStateToProps, {
    signupFirstNameChanged, 
    signupLastNameChanged,
    signupEmailChanged, 
    signupPasswordChanged, 
    signupConfirmPasswordChanged
})(SignupForm); 
