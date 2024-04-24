import { Button, StyleSheet, Text, View } from 'react-native'

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button
        title="Se connecter"
        onPress={(): void => {
          navigation.navigate('Login')
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
  }
})
