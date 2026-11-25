
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.logo}
                />

                <Text style={styles.titulo}>
                    Loja de Codornas
                </Text>

                <Text style={styles.descricao}>
                    Escolha sua codorna favorita!
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Premium</Text>
                <Text style={styles.descricao}>
                    Uma codorna de qualidade superior.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Gamer</Text>
                <Text style={styles.descricao}>
                    Ideal para jogar e botar ovos.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Gold</Text>
                <Text style={styles.descricao}>
                    Uma codorna de luxo.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Executiva</Text>
                <Text style={styles.descricao}>
                    Trabalha muito e não reclama.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Esportiva</Text>
                <Text style={styles.descricao}>
                    Corre mais que as outras.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Imperial</Text>
                <Text style={styles.descricao}>
                    Uma codorna da realeza.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Deluxe</Text>
                <Text style={styles.descricao}>
                    Uma experiência única.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna 4K</Text>
                <Text style={styles.descricao}>
                    Imagem em alta definição.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Pro Max</Text>
                <Text style={styles.descricao}>
                    A versão mais avançada.
                </Text>

                <Image
                    source={require("../../assets/images/LogoCodorna.png")}
                    style={styles.codorna}
                />
                <Text style={styles.nome}>Codorna Original</Text>
                <Text style={styles.descricao}>
                    A verdadeira codorna.
                </Text>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        justifyContent: "center",
        backgroundColor: "#fd7200",
        backgroundImage: "linear-gradient(to bottom, #fd7200, #000000)",
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf: "center",
    },

    titulo: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#df9c5e",
        marginBottom: 20,
        textAlign: "center",
    },

    descricao: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
        textAlign: "center",
    },

    codorna: {
        width: 200,
        height: 180,
        marginBottom: 10,
        alignSelf: "center",
    },

    nome: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#df9c5e",
        marginBottom: 10,
        textAlign: "center",
    },
});
