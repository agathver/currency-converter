import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import currencies from './currencies.json';
const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        color: '#FF4F4F',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24
    }
});
export default class CurrencyList extends React.Component {
    render() {
        return (
            <SafeAreaView>
                {currencies.map(currency => (
                    <Text key={currency.id} style={styles.root}>{currency.name}</Text>
                ))}
            </SafeAreaView>
        );

    }

}