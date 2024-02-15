import { Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contato() {
    const enviarMensagem = () => {
        
        alert('Mensagem enviada!');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Contato</Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Mensagem"  />
            <TouchableOpacity style={styles.button} onPress={enviarMensagem}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333', 
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#333333', 
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});