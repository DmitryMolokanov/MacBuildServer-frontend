"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import RegistrationLink from "@/components/form/RegistrationLink";
import Error from "@/components/form/Error";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "@/store/reducers/authReducer";

export default function Authentication() {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handlerSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch("http://localhost:3001/authentication", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (response.status === 401) {
      setErr(true);
      return;
    }
    const result = await response.json();

    if (result) {
      setErr(false);
      dispatch(addToken(result));
      router.push("/main-page");
    }
  };

  return (
    <div className={styles.FormPage}>
      <div className={styles.FormPageContainer}>
        <h1>Authorization</h1>
        {err ? <Error>Login or password is incorrect</Error> : null}
        <form className={styles.Form} onSubmit={handlerSubmit}>
          <Input type={"email"}>E-mail</Input>
          <Input type={"password"}>Password</Input>
          <RegistrationLink />
          <Button>Sign in</Button>
        </form>
      </div>
    </div>
  );
}
