import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App = () => {
  const [number, onChangeText] = React.useState('')

  const soma = function (){
    var resultado = number + 5
    onChangeText(resultado)
    return resultado
  }
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>

      <TextInput
      onChangeText={onChangeText}
      value={number}
      placeholder='Insira o número aqui'
      keyboardType="numeric"
      />
      <Button
      title='+'
      onPress={() => soma}
      />

      <Text>O valor é</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;