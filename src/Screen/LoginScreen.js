import React, {memo, useState} from 'react';
import {StyleSheet, Text, KeyboardAvoidingView} from 'react-native';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
import {handleLogin} from '../services/firebaseService';
import {theme} from '../theme';
import {emailValidator, passwordValidator} from '../theme/utils';
import {Snackbar} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [errorStatus, setErrorStatus] = useState(null);
  const [visible, setVisible] = useState(false);

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    const response = await handleLogin(email?.value, password?.value);
    setErrorStatus(response);
    setVisible(!errorStatus?.success);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {errorStatus?.error && (
        <Snackbar
          visible={visible}
          duration={3000}
          onDismiss={() => setVisible(false)}
          action={{
            label: 'Hide',
            onPress: () => {
              // Do something
            },
          }}>
          {errorStatus?.error}
        </Snackbar>
      )}
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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
  },
});

export default memo(LoginScreen);
