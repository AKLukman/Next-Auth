import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";

const auth = getAuth(app);
export default auth;
