import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function indexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui é a tela de login</Text>
      <Link href="/(app)/home">Logar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
