import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Service() {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>
                Culinaria arabe, uma das mais antigas e ricas do mundo. 
            </Text>
            <Text style={styles.descricao}>
                A culinária árabe é conhecida por seus sabores intensos e aromáticos, com o uso de especiarias como cominho, coentro, açafrão e canela. Pratos como falafel, hummus, tabule e kebabs são apenas algumas das delícias que podem ser encontradas na cozinha árabe.
            </Text>
        </View>
    );

}const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    padding: 20,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#000000',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
descricao: {
    fontSize: 15,
    color: '#a7a7aa',
    lineHeight: 23,
  },
});
