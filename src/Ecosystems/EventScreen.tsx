import * as React from 'react';
import { Container } from '../Atoms/Container';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';
import { Event } from '../Models/Event';
import { ListEntry } from '../Molecules/ListEntry';
import { List, Button, Text } from 'native-base';
import { LightButton } from '../Atoms/LightButton';
type Props = NavigationScreenProps<NavigationParams>;

export class EventScreen extends React.Component<Props> {
    static navigationOptions = ({ navigation }: NavigationScreenProps<any>) => {
        const { params } = navigation.state;
        const { event } = params;
        return {
            headerRight: (
                <Button transparent light>
                    <Text>Teilnehmen</Text>
                </Button>
            ),
            headerTitle: event.title,
        };
    };
    render() {
        const { event } = this.props.navigation.state.params;
        return (
            <Container>
                <List>
                    <ListEntry itemDivider content="Was?" />
                    <ListEntry last content={`${event.title}`} />
                    <ListEntry itemDivider content="Wann?" />
                    <ListEntry content={`${event.date}`} />
                    <ListEntry last content={`${event.time}`} />
                    <ListEntry itemDivider content="Wo?" />
                    <ListEntry content={`${event.location}`} />
                    <ListEntry content={`${event.address}`} />
                    <ListEntry content={`${event.postalCode} ${event.city}`} />
                </List>
            </Container>
        );
    }
}
