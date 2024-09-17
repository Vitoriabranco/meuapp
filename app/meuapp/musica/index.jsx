import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Musica() {
  return (
    <View style={styles.container}>
       <Image style source={require('../../../assets/images/musica.png.png')}/>
      <Text style={styles.title}>Música</Text>
      <Text style={styles.text}>Gosto de música popular brasileira, rock, pop e sertanejo.</Text>

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
    height: 150,
    marginBottom: 10,
    borderRadius: 5
  }
});
