import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PizzaItem from './components/PizzaItem';
import Form from './components/Form';

function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 24, marginBottom: 24 }}>
          Opa, esse é meu primeiro app!
        </Text>

        <Text style={{ fontSize: 16 }}>Lista de Pizzas!</Text>
        <PizzaItem
          name="Pizza de Calabresa"
          price={50}
          ingredients={['Calabresa', 'Massa', 'Ingrediente X']}
          onPress={() => Alert.alert('Calabresa')}
        />
        <PizzaItem
          name="Pizza de Mussarela"
          price={45}
          originalPrice={50}
          ingredients={['Queijo X', 'Massa', 'Ingrediente Y']}
          onPress={() => Alert.alert('Mussarela')}
        />

        <Form />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 40,
  },
  container: {
    alignItems: 'center',
  },
});

export default App;
