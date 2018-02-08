import * as React from 'react';
import { Container } from '../Atoms/Container';
import { Logo } from '../Atoms/Logo';
import { LoginForm } from '../Molecules/LoginForm';
import { LightButton } from '../Atoms/LightButton';
import { Spacer } from '../Atoms/Spacer';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';

type Props = NavigationScreenProps<NavigationParams>;

export class AllEventsScreen extends React.Component<Props> {
    render() {
        return (
            <Container
                blue
                contentContainerStyle={{ height: '100%', alignItems: 'center' }}
            >
                <Logo />
                <LoginForm
                    login={
                        this.props.screenProps
                            ? this.props.screenProps.login
                            : null
                    }
                />
                <Spacer />
                <LightButton
                    light
                    transparent
                    name="Noch kein Konto vorhanden?"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </Container>
        );
    }
}
