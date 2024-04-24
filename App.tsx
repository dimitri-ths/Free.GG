import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import List from './pages/List'
import Details from './pages/Details'
import Genre from './pages/Genre'

const AuthStack = createNativeStackNavigator()
const AppStack = createDrawerNavigator()
const PageStack = createNativeStackNavigator()

function CustomSidebarContent() {
  const navigation = useNavigation()
  const [isShown, setIsShown] = useState(false)
  const [platform, setPlatform] = useState('all')
  global.platform = platform

  const [focusedStates, setFocusedStates] = useState({
    All: false,
    PC: false,
    Browser: false
  })

  const updateFocusedState = (element: string) => {
    setFocusedStates((prevState) => ({
      ...prevState,
      [element]: true
    }))
    for (const key in focusedStates) {
      if (key !== element) {
        setFocusedStates((prevState) => ({
          ...prevState,
          [key]: false
        }))
      }
    }
    buttonHandler(element.toLowerCase())
  }

  const buttonHandler = (plat: string) => {
    setPlatform(plat)
    global.platform = plat
    console.log(plat)
  }

  return (
    <DrawerContentScrollView style={{ backgroundColor: '#white' }}>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
      <DrawerItem
        label="Category"
        onPress={() => {
          navigation.navigate('Category')
        }}
      />
      <DrawerItem
        label="Platform"
        onPress={() => {
          setIsShown(!isShown)
        }}
      />
      {isShown && (
        <>
          {Object.keys(focusedStates).map((element) => (
            <DrawerItem
              style={{ paddingLeft: 20 }}
              key={element}
              label={element}
              focused={focusedStates[element]}
              onPress={() => updateFocusedState(element)}
            />
          ))}
        </>
      )}
    </DrawerContentScrollView>

    //   <>
    //     <DrawerItem
    //       label="All"
    //       focused={isFocused}
    //       onPress={() => {
    //         setIsFocused(false)
    //         buttonHandler('all')
    //       }}
    //     />
    //     <DrawerItem
    //       label="PC"
    //       focused={isFocused}
    //       onPress={() => {
    //         setIsFocused(false)
    //         buttonHandler('pc')
    //       }}
    //     />
    //     <DrawerItem
    //       label="Browser"
    //       focused={isFocused}
    //       onPress={() => {
    //         setIsFocused(false)
    //         buttonHandler('browser')
    //       }}
    //     />
    //   </>
    // )}
    // </DrawerContentScrollView>
  )
}

function StackNav() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
      drawerContent={() => <CustomSidebarContent />}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Category" component={Genre} />
    </AppStack.Navigator>
  )
}

const isLogged = true

export default function App() {
  return (
    <NavigationContainer>
      {isLogged ? (
        <PageStack.Navigator
          screenOptions={{
            title: 'FREETOGAME',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <PageStack.Screen name="Navbar" component={StackNav} options={{ headerShown: false }} />
          <PageStack.Screen name="Details" component={Details} />
          <PageStack.Screen name="List" component={List} />
        </PageStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#700'
  }
})
