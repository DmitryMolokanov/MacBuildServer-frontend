import { useDispatch } from "react-redux";
import { cleanState } from "@/store/reducers/authReducer";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function SignOutBtn() {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <button
      className={styles.signOutBtn}
      onClick={() => {
        dispatch(cleanState());
        router.push("/authentication-page");
      }}
    >
      Sign Out
    </button>
  );
}
