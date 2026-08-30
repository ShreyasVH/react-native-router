import {Text, View} from 'react-native';
import {Link} from "expo-router";
import styles from "./styles";

export default function Page1Screen() {
    return <View>
        <Text style={styles.pageHeader}>Page 1</Text>

        <Link style={styles.link} href="/">Go Back</Link>
    </View>;
}