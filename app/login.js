import { LoginScreen } from '../src/loginScreen';
import { styles } from '../src/containerStyle';
import { View } from 'react-native';

export default function login() {
	return <View style={styles.container}><LoginScreen /></View>
}
