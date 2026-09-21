import { StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function LineageDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: id }} />
      <Text style={styles.title}>{id}</Text>
      <Text style={styles.body}>This will render the lineage as a tree once the canvas is built.</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
});
