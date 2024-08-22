import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// Componentes principais da Aplicação
const App = () => {

  // Função chamada quando um dos botões é pressionado
  const handleButtonPress = () => {
    alert('AI TI DILIÇA.'); // Exibe um alerta
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textButton}>Pressione o botão abaixo:</Text>
      <Button title="Botão do Kaique - Pressione-me" onPress={handleButtonPress}>
        Botão do Kaique - Pressione-me
      </Button>

      <TouchableOpacity onPress={handleButtonPress} style={styles.customButton}>
        {/* TouchableOpacity é um componente que pode ser pressionado, usado para criar botões personalizados */}
        <Text style={styles.textButton2}>Botão do Kaique - Personalizado</Text>
        {/* Texti dentro do botão personalizado */}
      </TouchableOpacity>
    </View>
  )
};

export default App;

// Estilização da Aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  customButton:{
    padding: 30,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },
  textButton2: {
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  }

});
