import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.item}>Export tree (JSON)</Text>
      <Text style={styles.item}>Import tree (JSON)</Text>
      <Text style={styles.item}>Appearance</Text>
      <Text style={styles.item}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    paddingVertical: 12,
    fontSize: 16,
    opacity: 0.8,
  },
});
