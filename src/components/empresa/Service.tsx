import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {
    titulo: string;
    descricao: string;
    imagem?: ImageSourcePropType;
    preco?: string;
};

export default function Service({ titulo, descricao, imagem, preco }: Props) {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>
                {titulo}
            </Text>
            {imagem && (
                <Image source={imagem} style={styles.logo} />
            )}
            {preco && (
                <Text style={styles.preco}>
                    {preco}
                </Text>
            )}
            <Text style={styles.descricao}>
                {descricao}
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    alignSelf: 'center',
  },
    descricao: {
    fontSize: 25,
    color: '#a7a7aa',
    lineHeight: 23,
    alignSelf: 'center',
    
  },
      logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 12,
        marginBottom: 8,
    },
    preco: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center',
        marginTop: 8,
    }

});
