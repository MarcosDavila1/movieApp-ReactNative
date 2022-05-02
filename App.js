import {useState, useRef} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Keyboard } from 'react-native';
import Cards from './components/Cards';
import Constants from 'expo-constants'

export default function App() {

  const [search, setSearch] = useState('')
  const [movieSearch, setMovieSearch] = useState([])
  const input = useRef()

  function handlePress(){
    search !== '' 
      ? fetch(`http://www.omdbapi.com/?apikey=191d8f10&s=${search}`)
        .then(res => res.json())
        .then(res => setMovieSearch(res.Search), Keyboard.dismiss(), input.current.clear(), setSearch(''))
      : Alert.alert('Please, type a movie for search')
  }

  return (    
    <View style={styles.container}>

      <Text style={styles.title}>
        Find your favorite movie here in The Movie App
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder='Ex: Spider man' 
        onChangeText={text => setSearch(text)}
        placeholderTextColor='#fff'
        ref={input}
      />

      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>

      <Cards 
        movieSearch={movieSearch}
      />
      
      <StatusBar 
        style='light' 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 20
  },
  title: {
    color: '#fff',
    fontSize: 24,
    margin: 10
  },
  input: {
    backgroundColor: '#808080',
    fontSize: 16,
    width: '80%',
    padding: 5,
    marginTop: 20,
    borderRadius: 20
  },
  btn: {
    width: '80%',
    marginTop: 20,
    backgroundColor: '#349675',
    padding: 5,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});
