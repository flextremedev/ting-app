import * as React from 'react';
import { Container } from '../Atoms/Container';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';
import { ListEntry } from '../Molecules/ListEntry';
import { List, Text } from 'native-base';
import { Button } from '../Atoms/Button';
import glamorous from 'glamorous-native';
type Props = NavigationScreenProps<NavigationParams>;

export class EventScreen extends React.Component<Props> {
    static navigationOptions = ({ navigation }: NavigationScreenProps<any>) => {
        const { params } = navigation.state;
        const { event } = params;
        return {
            headerTitle: event.title,
        };
    };
    render() {
        const { event, addToMyEvents } = this.props.navigation.state.params;
        return (
            <Container
                contentContainerStyle={{
                    height: '100%',
                    width: '100%',
                    alignContent: 'center',
                }}
            >
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
                <ButtonContainer>
                    <Button
                        name="Teilnehmen"
                        onPress={() => addToMyEvents(event)}
                    />
                </ButtonContainer>
            </Container>
        );
    }
}

const ButtonContainer = glamorous.view({
    flex: 1,
    justifyContent: 'center',
});
