import * as React from 'react';
import { Container } from './Atoms/Container';
import { LoggedIn, LoggedOut, createRootNavigator } from './Router';

type AppProps = {};

type AppState = {
    loggedIn: boolean;
};

export class App extends React.Component<AppProps, AppState> {
    state = {
        loggedIn: false,
    };

    login = () => {
        this.setState({ loggedIn: true });
    };
    logout = () => {
        this.setState({ loggedIn: false });
    };
    render() {
        const Layout = createRootNavigator(this.state.loggedIn);
        return (
            <Layout screenProps={{ login: this.login, logout: this.logout }} />
        );
    }
}
