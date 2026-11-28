import {
  ScrollView,
  StyleSheet,
} from 'react-native';


import Footer from '../components/empresa/Footer';
import Header from '../components/empresa/Header';
import Service from '../components/empresa/Service';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Service titulo="Kebab" imagem={require('../../assets/images/Kebab.png')} descricao="Bolinhos tradicionais feitos com grão-de-bico, ervas frescas e especiarias. Possuem exterior crocante e interior macio, sendo muito apreciados na culinária árabe." preco="R$ 15,00" />
             <Service titulo="Falafel" imagem={require('../../assets/images/Falafel.png')} descricao="Um prato típico preparado com carne temperada com ervas e especiarias, geralmente assada ou grelhada. É conhecido pelo sabor marcante e aroma irresistível." preco="R$ 20,00" />
              <Service titulo="Pão Sírio" imagem={require('../../assets/images/PaoSirio.png')} descricao="Pão tradicional do Oriente Médio, de massa leve e macia, com formato arredondado. É perfeito para acompanhar pastas, carnes e outros pratos da culinária árabe." preco="R$ 10,00" />
            <Footer/>
        </ScrollView>
    );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 16,
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 28,
  },
});



