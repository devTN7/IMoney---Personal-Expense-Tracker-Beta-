import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");
    await updateProfile(response.user, { displayName: fullname });
    return response;
  } catch (err) {
    let errorMessage = err.message.split("auth/")[1]?.replace(").", "");
    errorMessage = errorMessage.replace(/-/g, " ");
    error.value = errorMessage || "Unknown error";
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
