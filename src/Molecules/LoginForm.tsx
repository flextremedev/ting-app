import * as React from 'react';
import glamorous from 'glamorous-native';
import { Textbox } from '../Atoms/Textbox';
import { Button } from '../Atoms/Button';
type Props = {
    login: () => void;
};
export class LoginForm extends React.Component<Props> {
    render() {
        return (
            <LoginFormContainer>
                <Textbox placeholder="Username" />
                <Textbox placeholder="Passwort" secureTextEntry />
                <Button
                    name="Einloggen"
                    style={{ marginTop: 24 }}
                    onPress={() => this.props.login()}
                />
            </LoginFormContainer>
        );
    }
}

const LoginFormContainer = glamorous.view({
    width: 240,
});
