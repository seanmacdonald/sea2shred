import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { View, Text } from 'react-native'; 
import { emailChanged, passwordChanged, loginUser } from '../actions'; 
import { Card, CardSection, Input, Button, Spinner } from './common'; 

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text); 
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text); 
    }

    loginButtonPress() {
        const { email, password } = this.props; 

        this.props.loginUser({ email, password }); 
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        
        return (
            <Button onPress={this.loginButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

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
    }
};

export default connect(mapStateToProps, {
    emailChanged, 
    passwordChanged, 
    loginUser
})(LoginForm); 
