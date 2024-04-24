import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Genre({ navigation }) {
  const category = [
    '2d',
    '3d',
    'Action',
    'Action-rpg',
    'Anime',
    'Battle-royale',
    'Card',
    'Fantasy',
    'Fighting',
    'First-Person',
    'Flight',
    'Forror',
    'Low-spec',
    'Martial-arts',
    'Military',
    'Mmofps',
    'Mmo',
    'Mmorpg',
    'Mmorts',
    'Mmotps',
    'Moba',
    'Open-world',
    'Permadeath',
    'Pixel',
    'Pve',
    'Pvp',
    'Racing',
    'Sandbox',
    'Sci-fi',
    'Shooter',
    'Side-scroller',
    'Social',
    'Space',
    'Sports',
    'Strategy',
    'Superhero',
    'Survival',
    'Sailing',
    'Tank',
    'Third-Person',
    'Top-down',
    'Tower-defense',
    'Turn-based',
    'Voxel',
    'Zombie'
  ]

  return (
    <ScrollView style={styles.container}>
      {category.map((genre: string, index: number) => {
        return (
          <View key={index}>
            <Pressable
              onPress={() => {
                navigation.navigate('List', { name: genre })
              }}
            >
              <Text style={styles.text}>{genre}</Text>
            </Pressable>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#700'
  },

  text: {
    marginTop: 10,
    backgroundColor: 'black',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'white'
  }
})
