import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './components/Cards';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Mili peñaloza como estas!</Text>
      <Cards />
      <StatusBar style="auto" />
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
