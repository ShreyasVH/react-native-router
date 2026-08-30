import { Stack } from 'expo-router';
import styles from './styles';

export default function RootLayout() {
  return (
      <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              margin: '1%'
            }
          }}
      >
        <Stack.Screen
            name="index"
        />

        <Stack.Screen
            name="page1"
        />

        <Stack.Screen
            name="page2"
        />
      </Stack>
  );
}