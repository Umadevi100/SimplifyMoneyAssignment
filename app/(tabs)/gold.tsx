// app/silver.tsx
import { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import axios from "axios";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function GoldPage() {
  const router = useRouter();
  const [price, setPrice] = useState<number | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGold = async () => {
      try {
        const res = await axios.get(
          "https://api.metals.dev/v1/latest?api_key=QH0Z188IFZMNELEALN17990EALN17&currency=INR&unit=g"
        );
        setPrice(res.data.metals.gold);

        // format update time
        const updatedTime = new Date(res.data.timestamps.metal).toLocaleString();
        setUpdatedAt(updatedTime);
      } catch (err) {
        console.error("Error fetching gold price:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGold();
  }, []);

  return (
    <ThemedView style={styles.container}>
      {/* Silver Icon */}
      <Image
        source={require("@/assets/images/gold-icon.png")}
        style={styles.icon}
      />

      {/* Title */}
      <ThemedText type="title" style={styles.title}>
        Gold Price
      </ThemedText>

      {/* Price */}
      {loading ? (
        <ActivityIndicator size="large" color="#C0C0C0" />
      ) : (
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.price}>
            ₹{price?.toFixed(2)} / gram
          </ThemedText>
          <ThemedText style={styles.subtext}>
            Last updated: {updatedAt || "—"}
          </ThemedText>
        </ThemedView>
      )}

      {/* Back Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <ThemedText style={styles.buttonText}>← Back to Home</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  icon: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: "center",
    marginBottom: 24,
    width: "90%",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 6,
  },
  subtext: {
    fontSize: 14,
    color: "#6B7280",
  },
  button: {
    backgroundColor: "#C0C0C0",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
