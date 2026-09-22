import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createContext, useContext, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react-native';
import { Link } from 'expo-router';

// kamo nay bahala ug sabot dani HAHAHAAHAHAHAHHAHAHAHAHAHA
// All I did was just do some branching logic sa text input and buttons para
// na mas "modular" (for lack of a better term) ang akong code instead of writing
// them all in one function

// this will be used for the username, password, setUsername, and setPassword
const LoginContext = createContext();

function TextInputComp({placeholderText, inputType}) {
  const {username, password, setUsername, setPassword} = useContext(LoginContext);
  const [eyeStatus, setEye] = useState(false); // true is open, false is close
  return inputType === "password" ? (
    <View style={styles.textInput}>
      <TextInput placeholder={placeholderText} style={{flex: 1}} secureTextEntry={!eyeStatus} value={password} onChangeText={setPassword}></TextInput>
	  <TouchableOpacity onPress={() => setEye(!eyeStatus)}>
	    {eyeStatus ? (<Eye/>) : ( <EyeClosed/>)}
	  </TouchableOpacity>
    </View>
  ) : inputType === "username" ? (
    <View style={styles.textInput}>
      <TextInput placeholder={placeholderText} style={{flex: 1}} value={username} onChangeText={setUsername}></TextInput>
    </View>
  ) : (
	<Text>unknown input type!</Text>
  ) ;
}

// igo ra dayon i print ang username and password after pressing the submit button
function handleSubmit(username, password) {
  console.log(`
	username: ${username}
	password: ${password}
  `);
}

function ButtonComp({buttonType}) {
  const {username, password} = useContext(LoginContext);
  return buttonType === "submit" ? (
	  <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit(username, password)}>
	    <Text style={{color: "#000"}}>Login</Text>
	  </TouchableOpacity>
  ) : buttonType === "register" ? (
	  <Link href="/register" asChild>
	    <TouchableOpacity style={styles.registerButton}>
	      <Text style={{color: "#fff"}}>Register</Text>
	    </TouchableOpacity>
	  </Link>
  ) : (
 	<Text>unknown button type!</Text> 
  );
}

export function LoginScreen() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
	<LoginContext.Provider value={{username, password, setUsername, setPassword}}>
	  <View style={styles.loginContainer}>
	    <Text>Login</Text>
	    <View style={{marginTop: 10}}>
		  <View style={{gap: 10}}>
		    <TextInputComp placeholderText="Username" inputType="username"/>
		    <TextInputComp placeholderText="Password" inputType="password"/>
		  </View>
	    <View style={styles.buttonContainer}>
		  <ButtonComp buttonType="submit"/>
	      <ButtonComp buttonType="register"/>
	    </View>
	    </View>
	  </View>
	</LoginContext.Provider>
  );
}

const styles = StyleSheet.create({
  submitButton: {
	backgroundColor: "#00ff00",
	height: 30,
	borderWidth: 1,
	borderColor: "#000",
	alignItems: "center",
	justifyContent: "center",
  },
  registerButton: {
	backgroundColor: "#0000ff",
	height: 30,
	borderWidth: 1,
	borderColor: "#000",
	alignItems: "center",
	justifyContent: "center",
  },
  loginContainer: {
	flexDirection: "column",
	borderWidth: 1,
	borderColor: "#000",
	padding: 10,
	width: 300,
	height: 'auto',
  },
  buttonContainer: {
	marginTop: 20,
	gap: 10,
  },
  textInput: {
	flexDirection: "row",
	alignItems: "center",
	borderWidth: 1,
	borderColor: "#000",
	justifyContent: "space-between",
	paddingRight: 10,
  },
});
