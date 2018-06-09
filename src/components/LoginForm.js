import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
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
        loading: state.auth.loading
    };  
};

export default connect(mapStateToProps, {
    emailChanged, 
    passwordChanged, 
    loginUser
})(LoginForm); 
