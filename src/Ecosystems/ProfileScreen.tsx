import * as React from 'react';
import { Container } from '../Atoms/Container';
import { Logo } from '../Atoms/Logo';
import { LoginForm } from '../Molecules/LoginForm';
import { LightButton } from '../Atoms/LightButton';
import { Spacer } from '../Atoms/Spacer';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';
import { Button } from '../Atoms/Button';

type Props = NavigationScreenProps<NavigationParams>;

export class ProfileScreen extends React.Component<Props> {
    render() {
        return (
            <Container
                contentContainerStyle={{ height: '100%', alignItems: 'center' }}
            >
                <Button name="Ausloggen" />
            </Container>
        );
    }
}
