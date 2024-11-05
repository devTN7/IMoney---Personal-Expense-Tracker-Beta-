import { ref } from "vue";
import { signOut } from "firebase/auth";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const response = await signOut(projectAuth);
    return response;
  } catch (err) {
    let errorMessage = err.message.split("auth/")[1]?.replace(").", "");
    errorMessage = errorMessage.replace(/-/g, " ");
    error.value = errorMessage || "Unknown error";
  }
}

export function useLogout() {
  return { error, logout };
}
