import * as React from 'react';
import { Container } from '../Atoms/Container';
import { Logo } from '../Atoms/Logo';
import { RegisterForm } from '../Molecules/RegisterForm';
import { Spacer } from '../Atoms/Spacer';
import { LightButton } from '../Atoms/LightButton';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';

type Props = NavigationScreenProps<NavigationParams>;

export class RegisterScreen extends React.Component<Props> {
    render() {
        return (
            <Container
                blue
                contentContainerStyle={{ alignItems: 'center', height: '100%' }}
            >
                <Logo />
                <RegisterForm />
                <Spacer />
                <LightButton
                    light
                    transparent
                    name="Schon ein Konto vorhanden?"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </Container>
        );
    }
}
