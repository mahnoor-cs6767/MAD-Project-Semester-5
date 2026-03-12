import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './Supabase';


export default function LoginScreenNew({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async () => {
  if (!username || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: username.trim().toLowerCase(),
    password: password,
  });

  if (error) {
    Alert.alert('Login Failed', error.message);
  } else {
    Alert.alert('Login Success', `Welcome ${data.user.email}`);
    navigation.replace('MainScreenNew');
  }
};
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/islamic family.jpg')} style={styles.topImage} />
      <View style={styles.loginBox}>
        <Text style={styles.heading}>Sign In</Text>

        <TextInput style={styles.input} placeholder="Enter Email" value={username} onChangeText={setUsername} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: '#ff9a9e' }]} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#ffd6e8', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 40 },
  topImage: { width: '100%', height: 350, resizeMode: 'cover', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  loginBox: { width: '90%', marginTop: 30, backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 30, padding: 25, alignItems: 'center' },
  heading: { fontSize: 32, color: '#ff66b2', marginBottom: 20, fontWeight: '700' },
  input: { width: '100%', padding: 12, marginVertical: 10, borderRadius: 25, borderWidth: 2, borderColor: '#ccc', textAlign: 'center', fontSize: 15 },
  button: { width: '100%', padding: 14, marginTop: 18, borderRadius: 25, backgroundColor: '#8fd3f4', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
