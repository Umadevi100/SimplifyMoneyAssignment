import { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

    const [prices, setPrices] = useState<{ silver?: number; gold?: number; platinum?: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get(
          'https://api.metals.dev/v1/latest?api_key=QH0Z188IFZMNELEALN17990EALN17&currency=INR&unit=g'
        );

        console.log("API response:", res.data);

        const data = res.data.metals;

        setPrices({
        gold: data.gold,
        silver: data.silver,
        platinum: data.platinum,
      });
      } catch (error) {
        console.error('Error fetching prices:', error);
      } finally {
        setLoading(false);
      }
    };

     fetchPrices();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/SM-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.blocksContainer}>
        <TouchableOpacity 
          style={[styles.block, { backgroundColor: '#C0C0C0' }]} 
          onPress={() => router.push('/silver')}
        >
          <Image
            source={require('@/assets/images/silver-icon.png')}
            style={styles.icon}
          />
          <ThemedText type="subtitle" style={styles.blockTitle}>Silver</ThemedText>
          {loading ? <ActivityIndicator /> : <ThemedText>₹{prices.silver?.toFixed(2)} / gram</ThemedText>}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.block, { backgroundColor: '#FFD700' }]} 
          onPress={() => router.push('/gold')}
        >
          <Image
            source={require('@/assets/images/gold-icon.png')}
            style={styles.icon}
          />
          <ThemedText type="subtitle" style={styles.blockTitle}>Gold</ThemedText>
          {loading ? <ActivityIndicator /> : <ThemedText>₹{prices.gold?.toFixed(2)} / gram</ThemedText>}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.block, { backgroundColor: '#E5E4E2' }]} 
          onPress={() => router.push('/platinum')}
        >
          <Image
            source={require('@/assets/images/platinum-icon.png')}
            style={styles.icon}
          />
          <ThemedText type="subtitle" style={styles.blockTitle}>Platinum</ThemedText>
          {loading ? <ActivityIndicator /> : <ThemedText>₹{prices.platinum?.toFixed(2)} / gram</ThemedText>}
        </TouchableOpacity>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  blocksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  block: {
    flex: 1,
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  blockTitle: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
 reactLogo: {
  width: 150,         // control only width
  height: undefined,  // let height auto-scale
  aspectRatio: 3,     // keeps proportions (adjust to your logo)
  resizeMode: 'contain',
  alignSelf: 'center',
  marginTop: 20,
},
});
