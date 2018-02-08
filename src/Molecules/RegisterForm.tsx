import * as React from 'react';
import glamorous from 'glamorous-native';
import { Textbox } from '../Atoms/Textbox';
import { Button } from '../Atoms/Button';

export class RegisterForm extends React.Component {
    onLoginClick = () => {};
    render() {
        return (
            <RegisterFormContainer>
                <Textbox placeholder="Username" />
                <Textbox placeholder="Email" />
                <Textbox placeholder="Passwort" secureTextEntry />
                <Button name="Registrieren" style={{ marginTop: 24 }} />
            </RegisterFormContainer>
        );
    }
}

const RegisterFormContainer = glamorous.view({
    width: 240,
});
