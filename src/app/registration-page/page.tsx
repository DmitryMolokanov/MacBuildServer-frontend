"use client";

import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import Error from "@/components/form/Error";
import styles from "./stayles.module.css";
import AuthenticationLink from "../../components/form/AuthenticationLink";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import simpleValidForm from "../../../utils/simpleValidForm";

export default function Registration() {
  const [err, setErr] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const router = useRouter();

  const handlerSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!simpleValidForm(email, password)) {
      setEmptyField(true);
      setErr(false);
      return;
    }
    setEmptyField(false);

    const response = await fetch("http://localhost:3001/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status === 401) {
      setEmptyField(false);
      setErr(true);
    } else {
      setErr(false);
      router.push("/authentication-page");
    }
  };

  return (
    <div className={styles.FormPage}>
      <div className={styles.FormPageContainer}>
        <h1>Registration</h1>
        {emptyField ? <Error>Value input cannot be empty</Error> : null}
        {err ? (
          <Error>User with this email address already exists</Error>
        ) : null}
        <form className={styles.Form} onSubmit={handlerSubmit}>
          <Input type={"email"}>E-mail</Input>
          <Input type={"password"}>Password</Input>
          <AuthenticationLink />
          <Button>Sign in</Button>
        </form>
      </div>
    </div>
  );
}
