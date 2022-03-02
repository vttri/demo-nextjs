import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Employees.module.css'

export async function getServerSideProps () {
    const res = await fetch('https://6050632d534609001766fa26.mockapi.io/users')
    const employees = await res.json()
    console.log(employees)
    return {
        props: {
            employees,
        },
    }
}

export default function Users({ employees }) {
    return (
        <>
            <Head>
                <title>Zodinet | Employees</title>
            </Head>
            <div>
                <h1>All Users</h1>
                {employees.map((employee) => (
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