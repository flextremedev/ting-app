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
import { brandBlue } from '../StyleGuide';

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
            screen: AllEventsScreen,
        },
        Own: {
            screen: MyEventsScreen,
        },
        Profile: {
            screen: ProfileScreen,
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
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    fontSize: 17,
                },
            },
        },
    );
};
