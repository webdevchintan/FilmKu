import React, {memo, useState, useEffect} from 'react';
import {StyleSheet, Text, KeyboardAvoidingView, Image} from 'react-native';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
import {theme} from '../theme';
import {emailValidator, passwordValidator} from '../theme/utils';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email?.value, password?.value)
      .then(() => {
        console.log('User account created & signed in!');
        // navigation.navigate('BottomTab');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const Logo = () => (
    <Image
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      style={styles.logo}
    />
  );
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* <Logo /> */}
      <Text style={styles.header}>Login</Text>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 25,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(LoginScreen);
