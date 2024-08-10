import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const Form = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleButton = () => {
    Alert.alert('Apertou no botão!');
  };

  const handlePress = () => {
    Alert.alert('Clicou e soltou?');
  };

  const handlePressIn = () => {
    Alert.alert('Começou a pressionar!');
  };

  const handlePressOut = () => {
    Alert.alert('Parou de pressionar!');
  };

  const handleLongPress = () => {
    Alert.alert('Segurou o dedo!');
  };

  return (
    <View style={styles.container}>
      <Text>Nome: {name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Digite seu nome"
      />

      <Text>Idade: {age}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAge}
        value={age}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />

      <Text>Email: {email}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text>Senha: {password}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Button title="Enviar" onPress={handleButton} color="#fff" />

      {/* <View style={{ marginTop: 10 }}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>onPress</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 10 }}>
        <Pressable style={styles.button} onPressIn={handlePressIn}>
          <Text style={styles.buttonText}>onPressIn</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 10 }}>
        <Pressable style={styles.button} onPressOut={handlePressOut}>
          <Text style={styles.buttonText}>onPressOut</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 10 }}>
        <Pressable
          style={styles.button}
          onLongPress={handleLongPress}
          delayLongPress={1000}
        >
          <Text style={styles.buttonText}>onLongPress</Text>
        </Pressable>
      </View> */}

      <View style={{ marginTop: 10 }}>
        <Pressable
          style={styles.button}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onLongPress={handleLongPress}
        >
          <Text style={styles.buttonText}>All Pressable</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableHighlight
          style={styles.button}
          onPress={handlePress}
          underlayColor={'#16c51c'}
        >
          <Text style={styles.buttonText}>Touchable Highlight</Text>
        </TouchableHighlight>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Touchable Opacity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 5,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Form;
