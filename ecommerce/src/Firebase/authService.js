import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./config";

export class AuthService {
  createAccount = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username: name,
        email: user.email,
      });
      console.log(email, password);

      return await this.login({ email: email, password: password });
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  };

  login = async ({ email, password }) => {
    console.log("log", email, password);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google account name:", user.displayName);

      return result;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    }
  };

  logout = async () => {
    auth.signOut();
    console.log("logout");
  };
}

const authService = new AuthService();

export default authService;
