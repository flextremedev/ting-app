import * as React from 'react';
import { createRootNavigator } from './Router';
import { Event } from './Models/Event';
type AppProps = {};

type AppState = {
    loggedIn: boolean;
    events: Event[];
    myEvents: Event[];
};

const events: Event[] = [
    {
        id: '1',
        title: 'Event A',
        date: '8. Februar 2018',
        time: '12:30 Uhr',
        location: 'Starter Kitchen',
        postalCode: '12345',
        city: 'Musterstadt',
        address: 'Musterweg 123',
    },
    {
        id: '2',
        title: 'Event B',
        date: '15. Februar 2018',
        time: '12:30 Uhr',
        location: 'Starter Kitchen',
        postalCode: '12345',
        city: 'Musterhausen',
        address: 'Musterweg 123',
    },
];

export class App extends React.Component<AppProps, AppState> {
    state = {
        loggedIn: false,
        events,
        myEvents: [],
    };

    login = () => {
        this.setState({ loggedIn: true });
    };
    logout = () => {
        this.setState({ loggedIn: false });
    };
    render() {
        const { login, logout } = this;
        const { events, myEvents } = this.state;
        const Layout = createRootNavigator(this.state.loggedIn);
        return <Layout screenProps={{ login, logout, events, myEvents }} />;
    }
}
