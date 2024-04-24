import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { getCatPlat } from '../services/api/games/requests'
import { Games } from '../services/api/games/types'

export default function List({ navigation, route }) {
  const [games, setGames] = useState<Games[]>([])
  const Genre = route.params.name

  useEffect(() => {
    getCatPlat(Genre, global.platform).then((data) => {
      const sortedData = data.sort((a: string, b: string) => a.title.localeCompare(b.title))
      setGames(sortedData)
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      {(games ?? []).length > 0 ? (
        games.map((game: Games, index: number) => (
          <View key={index} style={styles.elems}>
            <Pressable
              onPress={() => {
                navigation.navigate('Details', { id: game.id })
              }}
            >
              <Text style={styles.title}>{game.title}</Text>
              <Image source={{ uri: game.thumbnail }} style={styles.image} />
              <Text style={styles.description}>{game.short_description}</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#700'
  },

  elems: {
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'black'
  },

  title: {
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 40,
    fontSize: 15,
    fontWeight: 'bold',
    alignContent: 'stretch',
    color: 'white'
  },

  image: {
    // resizeMode: 'contain',
    borderRadius: 10,
    margin: 20,
    width: 200,
    height: 120
  },

  description: {
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
    fontSize: 15,
    position: 'absolute',
    top: 10,
    right: 10,
    width: 150,

    color: 'white'
  }
})
