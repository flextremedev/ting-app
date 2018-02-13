import * as React from 'react';
import { Container } from '../Atoms/Container';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';
import { List } from 'native-base';
import { ListEntry } from '../Molecules/ListEntry';
import { Event } from '../Models/Event';

type Props = NavigationScreenProps<NavigationParams>;

export class MyEventsScreen extends React.Component<Props> {
    render() {
        const { myEvents, addToMyEvents } = this.props.screenProps
            ? this.props.screenProps
            : [];
        return (
            <Container contentContainerStyle={{ height: '100%' }}>
                <List>
                    {myEvents.map((e: Event) => (
                        <ListEntry
                            key={e.id}
                            content={`${e.title} - ${e.date}`}
                            onPress={() =>
                                this.props.navigation.navigate('Event', {
                                    event: e,
                                    addToMyEvents: addToMyEvents,
                                })
                            }
                            touchable
                        />
                    ))}
                </List>
            </Container>
        );
    }
}
