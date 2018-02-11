import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        color: '#FF4F4F',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 45
    }
});
export default class CurrencyList extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.root}>Britain Pound</Text>
                <Text style={styles.root}>Bitcoin</Text>
                <Text style={styles.root}>Belarusian Ruble</Text>
                <Text style={styles.root}>Albanian Lek</Text>
                <Text style={styles.root}>Argentine Peso</Text>
                <Text style={styles.root}>Armenian Dram</Text>
            </View>
        );

    }

}