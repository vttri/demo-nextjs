import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://6050632d534609001766fa26.mockapi.io/users");
  const employees = await res.json();
  const paths = employees.map((employee) => {
    return {
      params: { id: employee.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    "https://6050632d534609001766fa26.mockapi.io/users/" + id
  );
  const employee = await res.json();
  return {
    props: {
      employee,
    },
  };
}

export default function Employee({ employee }) {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  console.log(router.asPath);
  return (
    <>
      <Head>
        <title>Zodinet | Employees</title>
      </Head>
      <div>
        <h1>{employee.name}</h1>
        <p>Email: {employee.email}</p>
        <p>Website: {employee.website}</p>
        <p>Company: {employee.company}</p>
      </div>

      <button
        className={styles.btnDetail}
        type="button"
        onClick={() => router.push("/")}
      >
        GO HOME
      </button>
      <button
        className={styles.btnDetail}
        type="button"
        onClick={() => router.back()}
      >
        BACK
      </button>
      <button
        className={styles.btnDetail}
        type="button"
        onClick={() => router.reload()}
      >
        RELOAD
      </button>
    </>
  );
}
