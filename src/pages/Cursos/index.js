import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const logo = require('../../assets/ti.webp')
const logo1 = require('../../assets/soldador.jpeg')
const logo2 = require('../../assets/maxresdefault.jpg')

export default function Cursos() {

    const navigation = useNavigation();

    function eletronica () {
        navigation.navigate('Detalhes', { nomeCurso: 'ELETRÔNICA INDUSTRIAL', image: logo2, descricao: 'A Eletrônica é o ramo da ciência que estuda o uso de circuitos formados por componentes elétricos e eletrônicos, com o objetivo principal de representar, armazenar, transmitir ou processar informações, além do controle de processos e servomecanismos.' });
    }
    function soldador() {
        navigation.navigate('Detalhes', { nomeCurso: 'SOLDADOR AO ARCO ELÉTRICO', image: logo1, descricao: 'O curso de Soldagem ao Arco Elétrico TIG nas Posições Plana, Horizontal e Vertical tem por objetivo o desenvolvimento de capacidades relativas a execução de soldagem ao arco elétrico no processo TIG em aço carbono, nas posições plana (1F e 1G), horizontal (2F e 2G) e vertical (3F e 3G) em juntas de ângulo e topo, preparando, montando, soldando e realizando o controle visual e dimensional, seguindo procedimentos e normas técnicas, de qualidade, meio ambiente e de saúde e segurança no trabalho.' });
    }
    function informatica() {
        navigation.navigate('Detalhes', { nomeCurso: 'CURSO TÉCNICO DE INFORMÁTICA', image: logo, descricao: 'Compreender os processos da Tecnologia da Informação e Comunicação utilizados em um ambiente empresarial e industrial. O curso tem como objetivo apresentar os principais temas relacionados à infraestrutura de TI, serviços de redes, software, hardware, normas e padrões técnicos.'});
    }
    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>

            <ScrollView>
                <View>
                    <View style={styles.item}>
                        <TouchableOpacity style={[styles.botao]} onPress={eletronica}>
                            <Text style={styles.buttonText}>ELETRÔNICA INDUSTRIAL</Text>
                        </TouchableOpacity>
                        <Image style={{ width: 200, height: 210, marginBottom: 30, left: 75, marginTop: 23 }} source={logo2}></Image>
                    </View>

                    <View style={styles.item}>
                        <TouchableOpacity style={[styles.botao]} onPress={soldador}>
                            <Text style={styles.buttonText}>SOLDADOR AO ARCO ELÉTRICO</Text>
                        </TouchableOpacity>
                        <Image style={{ width: 280, height: 210, marginBottom: 30, left: 39, marginTop: 23 }} source={logo1}></Image>
                    </View>

                    <View style={styles.item}>
                        <TouchableOpacity style={[styles.botao]} onPress={informatica}>
                            <Text style={styles.buttonText}>CURSO TÉCNICO DE INFORMÁTICA</Text>
                        </TouchableOpacity>
                        <Image style={{ width: 350, height: 210, marginBottom: 30, left: 5, marginTop: 23 }} source={logo}></Image>
                    </View>
                </View>
                <StatusBar style="light" />

            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    item: {
        marginBottom: 30,
    },
    botao: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
