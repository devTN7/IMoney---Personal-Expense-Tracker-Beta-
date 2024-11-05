import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(null);

async function signIn(email, password) {
  error.value = null;
  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    return response;
  } catch (err) {
    let errorMessage = err.message.split("auth/")[1]?.replace(").", "");
    errorMessage = errorMessage.replace(/-/g, " ");
    error.value = errorMessage
      ? errorMessage + " or password"
      : "Unknown error";
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
