import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles';

export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.pageHeader}>Home Page</Text>

            <Link style={styles.link} href="/page1">Page 1</Link>
            <Link style={styles.link} href="/page2">Page 2</Link>
        </View>
    );
}