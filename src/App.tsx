import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type AppProps = {}

type AppState = {}

export class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
