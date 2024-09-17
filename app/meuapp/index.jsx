import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>Nome: Vitória Lucy Mina Alves Branco</Text>
      <Text style={styles.text}>Interesses: Viagens, Música, Muay Thai</Text>

      <View style={styles.buttonContainer}>
        <Link href="/meuapp/viagens" asChild>
          <Button title="Viagens" />
        </Link>

        <Link href="/meuapp/musica" asChild>
          <Button title="Música" />
        </Link>

        <Link href="/meuapp/esportes" asChild>
          <Button title="esportes" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
});
