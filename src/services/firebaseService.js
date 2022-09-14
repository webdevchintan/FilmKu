import auth from '@react-native-firebase/auth';
import {logoutUser, setUser} from '../reducers/authSlice';
import store from '../store/configureStore';

// user authentication
export const handleLogin = (email, password) => {
  let response = {};
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      response = {success: true, error: ''};
      return response;
    })
    .catch(async error => {
      if (error.code === 'auth/email-already-in-use') {
        const data = await alreadyHaveAccount(email, password);
        response = {
          success: data?.success,
          error: data?.error,
        };
        if (data?.user) {
          store.dispatch(setUser(JSON.stringify(data?.user)));
        }
        return response;
      } else {
        response = {
          success: false,
          error: error?.message,
        };
        return response;
      }
    });
};

//check if user already have account and then signin with the details
export const alreadyHaveAccount = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Signed in
      return {
        error: '',
        success: true,
        user: userCredential.user,
      };
      // ...
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        return {
          error: 'Wrong password for the email!',
          success: false,
        };
      } else {
        return {
          error: error.message,
          success: false,
        };
      }
    });
};

// logout user from the app
export const handleLogout = () => {
  return auth()
    .signOut()
    .then(() => store.dispatch(logoutUser()));
};
