import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import ToggleButton from './ToggleButton';

const styles = StyleSheet.create({
    rootViewStyle: {
        display: "flex",
        flexDirection: "column"
    },
    topViewStyle: {
        backgroundColor: '#FF4F4F',
        flexGrow: 1,
        height: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomViewStyle: {
        backgroundColor: 'white',
        flexGrow: 1,
        height: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    currencyLabel: {
        color: 'white',
        fontSize: 36
    },
    currencyValue: {
        color: 'white',
        fontSize: 84,
        marginTop: 24,
        marginBottom: 24
    },
    currencySymbol: {
        color: 'white',
        fontSize: 24
    },
    targetCurrencyLabel: {
        color: '#FF4F4F',
        fontSize: 36
    },
    targetCurrencyValue: {
        color: '#FF4F4F',
        fontSize: 84,
        marginTop: 24,
        marginBottom: 24
    },
    targetCurrencySymbol: {
        color: '#FF4F4F',
        fontSize: 24
    }
});

export default class CurrencyConverter extends React.Component {
    render() {
        return (
            <View style={styles.rootViewStyle}>
                <View style={styles.topViewStyle}>
                    <Text style={styles.currencyLabel}>US Dollar</Text>
                    <Text style={styles.currencyValue}>271 $</Text>
                    <Text style={styles.currencySymbol}>USD</Text>
                </View>
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.targetCurrencyLabel}>RUB</Text>
                        <Text style={styles.targetCurrencyValue}>16K</Text>
                        <Text style={styles.targetCurrencySymbol}>Russian Ruble</Text>
                    </View>
                    {/* <ToggleButton></ToggleButton> */}
            </View>

        );

    }

}