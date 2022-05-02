import { ScrollView, Image, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function Cards({movieSearch}) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=191d8f10&s=mickey')
      .then(res => res.json())
      .then(res => setMovies(res.Search))
  }, [])

  return (
    <ScrollView horizontal style={styles.container}>
      
      {movieSearch?.length > 0 
        ? movieSearch.map(movie => (
          <Image key={movie.imdbID} style={styles.poster} source={{uri: `${movie.Poster}`}}/>
        ))
        : movies?.map(movie => (
          <Image key={movie.imdbID} style={styles.poster} source={{uri: `${movie.Poster}`}}/>
        ))
      }  
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row'
  },
  poster: {
    width: 200,
    height: 400,
    margin: 10,
    borderRadius: 15
  }
})