import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function Cards() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        function getMovies(){
            const get = fetch('http://www.omdbapi.com/?apikey=191d8f10&s=spider').then(res => res.json()).then(res => setMovies(res.Search))
        }
        getMovies()
    }, [])
    
  return (
    <View>
        {}
      <Text>Acá van a ir las Cards</Text>
    </View>
  )
}