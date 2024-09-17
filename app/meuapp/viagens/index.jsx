import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Viagens() {
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require('../../../assets/images/viagens.png.jpeg')}/>
      <Text style={styles.title}>Minhas Viagens</Text>
      <Text style={styles.text}>Gosto de viajar, assim conhecendo diversas culturas</Text>

      <Link href="/meuapp" asChild>
        <Button title="Voltar para início" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 350,
    marginBottom: 10,
    borderRadius: 5,
  }
});