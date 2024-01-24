import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
  logout = async () => {
    auth.signOut();
    console.log('logout');
  };
}

const authService = new AuthService();

export default authService;
