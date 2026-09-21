import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createContext, useContext, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react-native';

const LoginContext = createContext();

function TextInputComp({placeholderText, inputType}) {
  const {username, password, setUsername, setPassword} = useContext(LoginContext);
  return inputType === "password" ? (
    <View style={styles.textInput}>
      <TextInput placeholder={placeholderText} style={{flex: 1}} secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>
	  <TouchableOpacity>
        <EyeClosed />
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
	  <TouchableOpacity style={styles.registerButton}>
	    <Text style={{color: "#fff"}}>Register</Text>
	  </TouchableOpacity>
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
