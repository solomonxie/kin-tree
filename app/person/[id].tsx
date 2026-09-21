import { StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import { Text, View } from '@/components/Themed';
import { Person } from '@/src/models/person';

// Stub data until the tree canvas feeds real nodes in.
const DEMO_PERSON: Person = {
  id: 'demo',
  name: 'Jane Doe',
  birthDate: '1950-01-01',
  birthPlace: 'Unknown',
  notes: 'Placeholder person card.',
};

export default function PersonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const person = { ...DEMO_PERSON, id };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: person.name }} />
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.field}>Born: {person.birthDate ?? '—'}</Text>
      <Text style={styles.field}>Place: {person.birthPlace ?? '—'}</Text>
      <Text style={styles.field}>Relations: —</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  field: {
    fontSize: 16,
    paddingVertical: 6,
    opacity: 0.8,
  },
});
