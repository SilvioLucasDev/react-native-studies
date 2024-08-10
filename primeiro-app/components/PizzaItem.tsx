import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type IPizzaItem = {
  name: string;
  price: number;
  originalPrice?: number;
  ingredients: Array<string>;
  onPress: () => void;
};

const PizzaItem: React.FC<IPizzaItem> = ({
  name,
  price,
  originalPrice,
  ingredients,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        {originalPrice && originalPrice > price && (
          <Text style={styles.promotionAlert}>Alerta de Promoção!</Text>
        )}

        <View style={styles.card}>
          <Text style={styles.pizzaName}>{name}</Text>

          <Text>
            R$ {price}
            {'   '}
            {originalPrice && originalPrice > price && (
              <Text style={styles.promotionPrice}>R$ {originalPrice}</Text>
            )}
          </Text>

          <Text>Ingredientes: {ingredients.join(', ')}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  card: {
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  promotionAlert: {
    marginBottom: 5,
    color: '#342',
    textAlign: 'center',
  },
  promotionPrice: {
    color: '#d21f1f',
    textDecorationLine: 'line-through',
  },
  pizzaName: {
    fontWeight: 'bold',
  },
});

export default PizzaItem;
