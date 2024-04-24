import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card/Card'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Card title="Bienvenue sur le login" />
      <Text style={styles.specialTittle}>Login</Text>
      <Button
        title="S'inscrire"
        onPress={(): void => {
          navigation.navigate('Register')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  specialTittle: {
    color: 'red'
  }
})
