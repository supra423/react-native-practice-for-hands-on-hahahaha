import { View, Text } from 'react-native'
import { Link } from 'expo-router';

export function RegisterScreen() {
  return (
    <View>
      <Text>This is the register screen bitches</Text>
	  <Link href="/login">
	    Go to Login screen
	  </Link>
    </View>
  );
}
