import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main';

export default function App() {
  return (
    //tudo que estiver dentro do return vai ser renderizado na página 
    <View style={styles.container}>
      <View>
        <Title />
      </View>
      <View>
        <Main/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

