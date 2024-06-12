import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, Auth, UserCredential } from "firebase/auth";

const auth: Auth = getAuth(firebase_app);

interface SignInResult {
    result: UserCredential | null;
    error: any | null;
}

export default async function signIn(email: string, password: string): Promise<SignInResult> {
    let result: UserCredential | null = null,
        error: any | null = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
