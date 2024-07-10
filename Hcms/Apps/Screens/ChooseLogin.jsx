import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChooseLogin() {
    const navigation = useNavigation();

    const navigateToPatientLogin = () => {
        navigation.navigate('PatientLogin');
    };

    const navigateToDoctorLogin = () => {
        navigation.navigate('DoctorLogin');
    };

    return (
        <ImageBackground 
            source={require('./../../assets/images/background.jpeg')} 
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Choose Login Type</Text>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity style={styles.option} onPress={navigateToDoctorLogin}>
                            <Image
                                source={require('./../../assets/images/doctoranimate.jpeg')}
                                style={styles.optionImage}
                            />
                            <Text style={styles.optionText}>Login as Doctor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option} onPress={navigateToPatientLogin}>
                            <Image
                                source={require('./../../assets/images/patientanimate.jpeg')}
                                style={styles.optionImage}
                            />
                            <Text style={styles.optionText}>Login as Patient</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },

    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 20,
        borderRadius: 10,
        elevation: 10,
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },

    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    option: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        width: '45%',
    },

    optionImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },

    optionText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        
        textAlign: 'center',
        width: '100%',
    },
});
