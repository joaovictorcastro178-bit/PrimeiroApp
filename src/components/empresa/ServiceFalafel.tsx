import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ServiceFalafel() {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>
                1. Falafel 
            </Text>
            <Text style={styles.descricao}>
                Bolinhos crocantes feitos à base de grão-de-bico, ervas e especiarias. Uma das receitas mais populares da culinária árabe.
            </Text>
            <Image
                    source={require("../../../assets/images/Falafel.png")}
                    style={styles.logo}
                />
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
  logo: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
});
