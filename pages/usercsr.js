import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Employees.module.css'

export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const res = await fetch('https://6050632d534609001766fa26.mockapi.io/users');
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false)
    }
    setTimeout(() => {
      getData();
    }, 5000)


  }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  return (
    <>
      <Head>
        <title>Zodinet | Employees</title>
      </Head>
      <div>
        <h1>All Users CSR</h1>
        {data?.map((employee) => (
          <Link key={employee.id} href={`/employees/${encodeURIComponent(employee.id)}`}>
            <a className={styles.employee}>
              <h3>{employee.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>

  )
}