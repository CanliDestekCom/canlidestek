// components/RoleRedirect.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";

export default function RoleRedirect() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        const role = token.claims.role;

        if (role === "admin") router.push("/admin");
        else if (role === "psikolog") router.push("/psikolog-paneli");
        else router.push("/dashboard");
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <p>Yönlendiriliyor...</p>;
}