import { RegisterScreen } from '../src/registerScreen';
import { View } from 'react-native';
import { styles } from '../src/containerStyle.js'

export default function register() {
	// all this does is call the actual RegisterScreen screen
	return <View style={styles.container}><RegisterScreen /></View>
}
