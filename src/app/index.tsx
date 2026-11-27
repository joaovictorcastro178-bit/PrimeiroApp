import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import ServiceKebab from '@/components/empresa/ServiceKebab';
import Footer from '../components/empresa/Footer';
import Header from '../components/empresa/Header';
import Service from '../components/empresa/Service';
import ServiceFalafel from '../components/empresa/ServiceFalafel';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Service/>
            <ServiceFalafel/>
            <ServiceKebab/>
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



