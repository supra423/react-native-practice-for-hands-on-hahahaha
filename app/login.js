import { LoginScreen } from '../src/loginScreen';
import { styles } from '../src/containerStyle';
import { View } from 'react-native';

export default function login() {
	// all this does is call the actual LoginScreen screen
	return <View style={styles.container}><LoginScreen /></View>
}
