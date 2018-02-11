import * as React from 'react';
import { LoginScreen } from './Ecosystems/LoginScreen';
import {
    StackNavigator,
    NavigationContainer,
    TabNavigator,
} from 'react-navigation';
import { RegisterScreen } from './Ecosystems/RegisterScreen';
import { AllEventsScreen } from './Ecosystems/AllEventsScreen';
import { MyEventsScreen } from './Ecosystems/MyEventsScreen';
import { ProfileScreen } from './Ecosystems/ProfileScreen';
import { brandBlue, white } from '../StyleGuide';
import { EventScreen } from './Ecosystems/EventScreen';

export const EventNavigator: NavigationContainer = StackNavigator(
    {
        AllEvents: {
            screen: AllEventsScreen,
        },
        Event: {
            screen: EventScreen,
        },
    },
    {
        headerMode: 'float',
        mode: 'modal',
        initialRouteName: 'AllEvents',
        navigationOptions: {
            headerTintColor: white,
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize: 17,
            },
            headerStyle: {
                backgroundColor: brandBlue,
            },
            headerTitle: 'Alle Events',
        },
    },
);

export const LoggedOut: NavigationContainer = StackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'Login',
    },
);
export const LoggedIn = TabNavigator(
    {
        All: {
            screen: EventNavigator,
            navigationOptions: {
                header: null,
                tabBarLabel: 'Alle Events',
            },
        },
        Own: {
            screen: MyEventsScreen,
            navigationOptions: {
                title: 'Meine Events',
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Konto',
            },
        },
    },
    {
        initialRouteName: 'All',
    },
);

export const createRootNavigator = (loggedIn: boolean) => {
    return StackNavigator(
        {
            LoggedIn: {
                screen: LoggedIn,
                navigationOptions: {
                    gesturesEnabled: false,
                },
            },
            LoggedOut: {
                screen: LoggedOut,
                navigationOptions: {
                    gesturesEnabled: false,
                    header: null,
                },
            },
        },
        {
            initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut',
            headerMode: 'float',
            mode: 'card',
            navigationOptions: {
                headerTintColor: white,
                headerTitleStyle: {
                    fontWeight: 'normal',
                    fontSize: 17,
                },
                headerStyle: {
                    backgroundColor: brandBlue,
                },
            },
        },
    );
};
