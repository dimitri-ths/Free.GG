import { StyleSheet, Pressable, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Menu, Divider, Provider } from 'react-native-paper'

export default function Plat() {
  const [platform, setPlatform] = useState('all')
  const [visible, setVisible] = React.useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  global.platform = platform

  const buttonHandler = (plat: string) => {
    setPlatform(plat)
    global.platform = plat

    console.log(plat)
  }

  return (
    <ScrollView>
      <Provider>
        <Menu
          style={styles.text}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button style={styles.container} onPress={openMenu}>
              Show menu
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              buttonHandler('all')
            }}
            title="ALL"
          />
          <Menu.Item
            onPress={() => {
              buttonHandler('pc')
            }}
            title="PC"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              buttonHandler('browser')
            }}
            title="Browser"
          />
        </Menu>
      </Provider>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'blue',
    alignItems: 'stretch',
    padding: 10,
    fontSize: 15,
    width: 200,
    height: 300,
    position: 'absolute',
    top: 10,
    right: 100,
    width: 150,
    color: 'black'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 365,
    height: 206
  }
})
