import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ReadBoxMap from './screens/ReadBoxMap'

const { Navigator, Screen } = createStackNavigator()

export default function routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="ReadBoxMap" component={ReadBoxMap} />
      </Navigator>
    </NavigationContainer>
  )
}
