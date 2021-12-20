import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth as firebaseAuth } from "./firebase/firebase";
import { authActions } from "./store/auth/authSlice";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const [authUser, authLoading, authError] = useAuthState(firebaseAuth);
  const history = useHistory();
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(authActions.setUser(user));
      history.replace("/");
    } else {
      dispatch(authActions.clearUser());
      history.replace("/auth");
    }
  });

  return (
    <div className={styles.app}>
      {authLoading ? (
        <p>Loading...</p>
      ) : (
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
