import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { Text, View } from '@/components/Themed';
import { Lineage } from '@/src/models/lineage';

const LINEAGES: Lineage[] = [
  { id: 'my-family', title: 'My Family', subtitle: 'Your own tree' },
  { id: 'adam-jesus', title: 'Historical: Adam → Jesus', subtitle: 'Biblical lineage' },
  { id: 'origins', title: 'Ancestral Origins', subtitle: 'Trace regional & ethnic roots' },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={LINEAGES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/lineage/[id]', params: { id: item.id } }} asChild>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  row: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#8888',
  },
  rowTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  rowSubtitle: {
    marginTop: 2,
    opacity: 0.6,
  },
});
