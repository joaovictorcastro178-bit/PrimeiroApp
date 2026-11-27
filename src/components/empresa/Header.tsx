import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
    
export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Al'mossar
            </Text>
            <Text style={styles.subtitulo}>
                O melhor da culinaria árabe!
            </Text>
        </View>
    );


}const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007c15',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#d1d8d1',
    marginTop: 8,
    textAlign: 'center',
  },
});