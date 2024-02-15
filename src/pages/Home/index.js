import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const img = require('../../assets/SENAI_São_Paulo_logo.png');

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.centalizarImg}>
        <Image style={{ width: 340, height: 90, marginTop: 215, }} source={img}></Image>
        <StatusBar style="light" />
      </View>

      <View style={styles.container}>
        <Text>Kelly Karina Bezerra de Souza</Text>
        <Text>Sumaré, 30/01/2024</Text>
        <Text>Escola SENAI Celso Charuri</Text>
        <Text>Técnico em Desenvolvimento de Sistemas</Text>
        <Text>INDMO - Interface para Dispositivos Móveis</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centalizarImg: {
    alignItems: 'center',
  },
});