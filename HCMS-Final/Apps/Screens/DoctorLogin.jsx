import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DoctorLogin() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        
        <View style={styles.container}>
            <Text style={styles.heading}>Doctor Login</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='Enter Email'
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder='Enter Password'
                style={styles.input}
                placeholderTextColor="#999"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity     
                style={[styles.button, styles.buttonSecondary]}
            >
                <Text style={styles.buttonText}>Send us an email to create an account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: "#FFF",
        color: "#333",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#333",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    buttonSecondary: {
        backgroundColor: "#999",
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
})