import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getGame } from '../services/api/games/requests'
import { GameDetails } from '../services/api/games/types'

export default function Details({ navigation, route }) {
  const [game, setGame] = useState<GameDetails>()
  const GameId = route.params.id

  useEffect(() => {
    getGame(GameId).then((data) => {
      setGame(data)
    })
  }, [])
  console.log(game)
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: game?.thumbnail }} style={{ width: 400, height: 200 }} />
      <Text style={{ fontSize: 30, paddingHorizontal: 20, paddingTop: 20, fontWeight: 'bold' }}>{game?.title}</Text>
      <Text style={{ paddingHorizontal: 20, paddingBottom: 20 }}> {game?.status}</Text>
      <Text style={{ fontSize: 20, paddingHorizontal: 10, paddingVertical: 10 }}>Description</Text>
      <Text style={styles.text}>{game?.description}</Text>
      <Text
        style={{ color: 'blue', paddingHorizontal: 15, paddingVertical: 10 }}
        onPress={() => Linking.openURL(game?.game_url)}
      >
        {game?.game_url}
      </Text>
      <Text
        style={{ color: 'blue', paddingHorizontal: 15, paddingVertical: 10 }}
        onPress={() => Linking.openURL(game?.freetogame_profile_url)}
      >
        {game?.freetogame_profile_url}
      </Text>
      <Text style={styles.text}>Genre : {game?.genre}</Text>
      <Text style={styles.text}>Platform : {game?.platform}</Text>
      <Text style={styles.text}>Publisher : {game?.publisher}</Text>
      <Text style={styles.text}>Developer : {game?.developer}</Text>
      <Text style={styles.text}>Realease : {game?.release_date}</Text>

      <Text style={{ fontSize: 20, paddingHorizontal: 10, paddingVertical: 20 }}>Minimum System Requirements</Text>

      <Text style={styles.system}>OS : {game?.minimum_system_requirements?.os}</Text>
      <Text style={styles.system}>Processor : {game?.minimum_system_requirements?.processor}</Text>
      <Text style={styles.system}>Memory : {game?.minimum_system_requirements?.memory}</Text>
      <Text style={styles.system}>Graphics : {game?.minimum_system_requirements?.graphics}</Text>
      <Text style={{ paddingBottom: 30, paddingHorizontal: 15, paddingVertical: 10 }}>
        Storage : {game?.minimum_system_requirements?.storage}
      </Text>

      {game?.screenshots?.map(({ id, image }) => {
        return (
          <View key={id}>
            {console.log(image)}
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  image: {
    width: 'auto',
    height: 206
  },

  system: {
    marginTop: 10,
    paddingHorizontal: 15,
    color: 'black'
  },

  text: {
    marginTop: 10,
    paddingHorizontal: 15,
    color: 'black'
  },

  title: {
    fontSize: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'black'
  }
})
