
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, SafeAreaView, ImageBackground} from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "307236621402-2h34sl5e84njnp1oe6p1pkip7g14vmgb.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <ImageBackground source={require('../images/bg.jpg')} style={styles.container}>
                <SafeAreaView style={styles.container}></SafeAreaView>
                <Text>Rick and Morty API - Parcial2 </Text>
                <Image source={require('../images/rick.png')} style={styles.mainImage}/>
            
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                />
            <SafeAreaView style={styles.container}></SafeAreaView>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bfde7c',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

