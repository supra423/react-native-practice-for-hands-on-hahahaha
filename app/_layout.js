import { Stack } from 'expo-router';
/*
this file is named _layout.js because I think mao ni sya gina pangita ni expo-router
just think of it as a naming convention
*/

export default function RootLayout() {
  return (
	<Stack>
	  {
		  /*
			this is where you define each screens, these screens must be present in the 
		 	app/ directory. It is named app/ because I think the directory name is also
			what expo-router looks for screens.

			The name prop corresponds to the file name
			of a particular screen, you can see that login.js and register.js are in app/
		  */
	  }
	  <Stack.Screen name="login" />
	  <Stack.Screen name="register" />
	</Stack>
  );
}
