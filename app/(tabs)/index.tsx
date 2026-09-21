import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { Text, View } from '@/components/Themed';

// Planned: pannable/zoomable tree canvas rendered with @shopify/react-native-skia,
// tapping a node navigates to /person/[id].
export default function TreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Family Tree</Text>
      <Text style={styles.body}>
        This is where your tree canvas will live — pan, zoom, and tap a person to see their
        details.
      </Text>
      <Link href="/person/demo" style={styles.link}>
        <Text style={styles.linkText}>Preview a person card →</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
  link: {
    marginTop: 24,
  },
  linkText: {
    fontSize: 15,
  },
});
