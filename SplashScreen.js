import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreenNew({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // 3 seconds ke baad check kare user exists
    const timer = setTimeout(async () => {
      const storedUser = await AsyncStorage.getItem('userAccount');
      if (storedUser) {
        navigation.replace('Home'); // existing user
      } 
      else {
  navigation.replace('CreateAccount'); // new user
}
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Little Learner 🌙</Text>
        </View>
        <Text style={styles.title}>Welcome to Little Learners</Text>
        <Text style={styles.tagline}>Let's learn, grow and play together</Text>
        <Text style={styles.loading}>Loading...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8b500', alignItems: 'center', justifyContent: 'center' },
  logoBox: {
  backgroundColor: '#333',
  paddingVertical: 14,   // pehle 20
  paddingHorizontal: 30, // pehle 40
  borderRadius: 40,
  marginBottom: 20,
},
  logoText: {
  fontSize: 34,          // pehle 42
  fontWeight: 'bold',
  color: '#fff',
  lineHeight: 38,        // ⭐ yeh main fix hai
  textAlignVertical: 'center',
},
  title: { fontSize: 28, fontWeight: '600', color: '#222', marginTop: 10, textAlign: 'center' },
  tagline: { fontSize: 16, color: '#444', marginTop: 5, fontStyle: 'italic', textAlign: 'center' },
  loading: {
  marginTop: 30,
  fontSize: 18,
  color: '#333',
  fontWeight: 'bold',
  textAlign: 'center',   // ⭐ text ko center karega
  alignSelf: 'center',   // ⭐ left se mid mein laayega
},
});
