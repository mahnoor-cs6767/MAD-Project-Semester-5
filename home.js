import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* ===== Header ===== */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Little Learner 🌙</Text>

        {/* ✅ Logout / Login Button */}

        <TouchableOpacity
  style={styles.loginBtn}
  onPress={() => navigation.navigate('Login')}
>
  <Text style={styles.loginText}>Login</Text>
</TouchableOpacity>


      </View>

      {/* ===== Hero Section ===== */}
      <View style={styles.hero}>
        <Image source={require('./assets/HOMEPAGE.png')} style={styles.heroImage} resizeMode="contain" />
      </View>

      {/* ===== Quote Section ===== */}
      <View style={styles.curveSection}>
        <Text style={styles.curveText}>💡 “Learning made fun for little learners.”</Text>
      </View>

      {/* ===== Cards Section ===== */}
      <View style={styles.cardsSection}>
        <Text style={styles.cardsHeading}>🚀 Adventure Awaits in Every Card!</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={[styles.card, styles.storyCard]}>
            <Text style={styles.cardTitle}>📚 Stories</Text>
            <Text style={styles.cardText}>Enjoy fun and inspiring stories for kids.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.hadithCard]}>
            <Text style={styles.cardTitle}>📖 Hadith</Text>
            <Text style={styles.cardText}>Discover and learn a new Hadith every day!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.duasCard]}>
            <Text style={styles.cardTitle}>🤲 Duas</Text>
            <Text style={styles.cardText}>Beautiful Duas to remember Allah Almighty.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.wordCard]}>
            <Text style={styles.cardTitle}>🌟 Word</Text>
            <Text style={styles.cardText}>Discover new words in Arabic, Urdu & English!</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== Games / Slider Section ===== */}
      <View style={styles.gamesSection}>
        <Text style={styles.sectionHeading}>🌟 Fun Games for Little Learners!</Text>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{ height: 250 }}>
          <Image source={require('./assets/Habit.jpeg')} style={styles.sliderImage} />
          <Image source={require('./assets/Habit2.jpeg')} style={styles.sliderImage} />
          <Image source={require('./assets/Habit3.jpeg')} style={styles.sliderImage} />
          <Image source={require('./assets/Habit4.jpeg')} style={styles.sliderImage} />
          <Image source={require('./assets/Habit5.jpeg')} style={styles.sliderImage} />
          <Image source={require('./assets/Habit6.jpeg')} style={styles.sliderImage} />
        </ScrollView>
      </View>

      {/* ===== Footer ===== */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Little Learners. All Rights Reserved 🌙</Text>
        <Text style={styles.footerText}>Learn, Play & Explore with Little Learners!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  logoText: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  loginBtn: { backgroundColor: '#f5e504', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10 },
  loginText: { fontWeight: 'bold', color: '#131111' },
  hero: { justifyContent: 'center', alignItems: 'center', height: 280, marginVertical: 20 },
  heroImage: { width: 280, height: 280 },
  curveSection: { backgroundColor: '#ff9137', padding: 20, alignItems: 'center' },
  curveText: { fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  cardsSection: { padding: 20 },
  cardsHeading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  cardContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', padding: 15, borderRadius: 15, marginBottom: 15 },
  storyCard: { backgroundColor: '#ffdde1' },
  hadithCard: { backgroundColor: '#b3e5fc' },
  duasCard: { backgroundColor: '#c8e6c9' },
  wordCard: { backgroundColor: '#fff59d' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  cardText: { fontSize: 14 },
  gamesSection: { paddingVertical: 20 },
  sectionHeading: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  sliderImage: { width: 300, height: 250, resizeMode: 'cover', marginHorizontal: 5, borderRadius: 15 },
  footer: { backgroundColor: '#ff9137', padding: 20, alignItems: 'center' },
  footerText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
