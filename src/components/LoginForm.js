import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { emailChanged } from '../actions'; 
import { Card, CardSection, Input, Button } from './common'; 

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text); 
    }

    render() {
        return (
            <Card>
                {/*Email Card Section*/}
                <CardSection>
                    <Input 
                        label="Email"
                        placeHolder="example@mail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                {/*Password Card Section
                <CardSection>
                    <Input 
                        label="Password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>*/}

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email
    };  
};

export default connect(mapStateToProps, {
    emailChanged
})(LoginForm); 
