import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Text>Home Page</Text>
        <Button
            title="Page 1"
            onPress={() =>
                navigation.navigate('Page 1')
            }
        />
        <Button
            title="Page 2"
            onPress={() =>
                navigation.navigate('Page 2')
            }
        />

      </View>
  );
};
const Page1Screen = ({ navigation, route }) => {
  return <Text>Page 1</Text>;
};

const Page2Screen = ({ navigation, route }) => {
  return <Text>Page 2</Text>;
};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Page 1" component={Page1Screen} />
          <Stack.Screen name="Page 2" component={Page2Screen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
