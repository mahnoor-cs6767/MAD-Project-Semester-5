import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Modal, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './Supabase';

export default function CreateAccountNew({ navigation }) {
  const [username, setusername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

 const handleRegister = async () => {
  if (!username || !age || !email || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  // Step 1: Create account in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: email.trim().toLowerCase(),
    password: password,
  });

  if (error) {
    Alert.alert('Error', error.message);
    return;
  }

  // Step 2: Save extra info in your 'users' table
  await supabase.from('users').insert([
    {
      email: email.trim().toLowerCase(),
      username: username.trim(),
      age: age.trim(),
    }
  ]);

  setPopupVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Create Account</Text>
        <TextInput style={styles.input} placeholder="Enter user name" value={username} onChangeText={setusername} />
        <TextInput style={styles.input} placeholder="Enter Age" keyboardType="numeric" value={age} onChangeText={setAge} />
        <TextInput style={styles.input} placeholder="Enter Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry value={password} onChangeText={setPassword} />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>

      <Modal transparent visible={popupVisible} animationType="fade">
        <View style={styles.popupOverlay}>
          <View style={styles.popupBox}>
            <Text style={styles.popupTitle}>🎉 Account Created!</Text>
            <Text style={styles.popupText}>Your account has been created successfully</Text>
            <Pressable
              style={styles.popupButton}
              onPress={() => {
                setPopupVisible(false);
                navigation.replace('MainScreenNew'); // user enters app
              }}
            >
              <Text style={styles.popupButtonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#89f7fe', alignItems: 'center', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: 'rgba(255,255,255,0.9)', padding: 35, borderRadius: 30, width: '90%', alignItems: 'center', elevation: 8 },
  heading: { fontSize: 32, color: '#5b86e5', marginBottom: 25, fontWeight: '700' },
  input: { width: '85%', padding: 12, marginVertical: 10, borderRadius: 25, borderWidth: 2, borderColor: '#ddd', textAlign: 'center', fontSize: 15, backgroundColor: '#fff' },
  button: { width: '65%', padding: 12, marginTop: 25, borderRadius: 25, backgroundColor: '#5b86e5', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 17 },
  popupOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center' },
  popupBox: { backgroundColor: '#fff', padding: 30, borderRadius: 20, alignItems: 'center', elevation: 10 },
  popupTitle: { fontSize: 24, color: '#5b86e5', marginBottom: 10, fontWeight: '700' },
  popupText: { fontSize: 16, color: '#333', marginBottom: 20 },
  popupButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 25, backgroundColor: '#ff7eb3' },
  popupButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
