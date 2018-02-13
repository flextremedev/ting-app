import * as React from 'react';
import { Container } from '../Atoms/Container';
import { NavigationScreenProps, NavigationParams } from 'react-navigation';
import { Event } from '../Models/Event';
import { ListEntry } from '../Molecules/ListEntry';
import { FlatList } from 'react-native';
type Props = NavigationScreenProps<NavigationParams>;
type State = {
    events: Event[];
};

export class AllEventsScreen extends React.Component<Props, State> {
    render() {
        const addToMyEvents = this.props.screenProps
            ? this.props.screenProps.addToMyEvents
            : null;
        const events: Event[] = this.props.screenProps
            ? this.props.screenProps.events
            : [];
        return (
            <Container>
                <FlatList
                    data={events}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <ListEntry
                                content={`${item.title} - ${item.date}`}
                                onPress={() =>
                                    this.props.navigation.navigate('Event', {
                                        event: item,
                                        addToMyEvents: addToMyEvents,
                                    })
                                }
                                touchable
                            />
                        );
                    }}
                />
            </Container>
        );
    }
}
