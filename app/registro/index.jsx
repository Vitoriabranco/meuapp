import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setSenha] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up:', nome, email, senha);
  };

  const handleGoogleSignUp = () => {
    console.log('Continuar com Google');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskHub</Text>
      <Text style={styles.subtitle}>Crie seu usuário com e-mail e senha</Text>
      
      <TextInput
        style={styles.input}
        placeholder="nome"
        value={nome}
        onChangeText={definirNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={denifirEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="senha"
        secureTextEntry
        value={senha}
        onChangeText={definirSenha}
      />
      
      <Button title="Sign Up" onPress={Cadastre-se} />
      
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
        <Text style={styles.googleButtonText}>Continuar com Google</Text>
      </TouchableOpacity>
      
      <Text style={styles.signInText}>
      Já tem uma conta? <Text style={styles.signInLink}>Entrar</Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 30,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    googleButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#4285F4',
      borderRadius: 5,
      alignItems: 'center',
    },
    googleButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    signInText: {
      marginTop: 20,
      textAlign: 'center',
      color: '#666',
    },
    signInLink: {
      color: '#4285F4',
      fontWeight: 'bold',
    },
  });
  
  export default SignUpScreen;