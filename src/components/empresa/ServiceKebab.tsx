import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ServiceKebab() {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>
                1. Kebab 
            </Text>
            <Text style={styles.descricao}>
                Carne temperada com especiarias e preparada na grelha, conhecida por seu sabor marcante e aroma irresistível.
            </Text>
            <Image
                    source={require("../../../assets/images/Kebab.png")}
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
