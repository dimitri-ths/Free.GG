import { View, Text, Image, StyleSheet } from 'react-native'

type CardProps = {
  title: string
}

export default function Card({ title }: CardProps) {
  return (
    <View>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/11/06/23/19/composing-2925179_640.jpg'
        }}
        style={styles.image}
      />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300
  }
})
