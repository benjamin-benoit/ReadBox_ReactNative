import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import MapView from 'react-native-maps'

export default function ReadBoxMap() {
  const navigation = useNavigation()

  return (
    <View>
      <MapView></MapView>
    </View>
  )
}
