import { StyleSheet, Text, View } from "react-native";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Meu Primeiro Aplicativo
            </Text>
            <Text style={styles.descricao}>
                Olá, seja bem-vindo ao meu primeiro aplicativo feito com React Native!
            </Text>
            <Text style={styles.descricao}>
                Aqui você pode aprender mais sobre como criar aplicativos móveis usando JavaScript e React.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#df9c5e",
        marginBottom: 20,
        
    },
    container: {
        flex: 1,
        padding: 35,
        justifyContent: "center",
        backgroundColor: "#fd7200",
        backgroundImage: "linear-gradient(to right, #1f1e1e, #ee721f)",
    },
    descricao: {
        fontSize: 20,
        color: "white",
        marginBottom: 10,
        
    }
});