// DoctorLogin.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DoctorLogin() {
    return (
        <View style={styles.container}>
            <Text>Doctor Login Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
