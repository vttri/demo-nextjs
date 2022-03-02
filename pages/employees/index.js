import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Employees.module.css'

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://6050632d534609001766fa26.mockapi.io/users')
    const employees = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            employees,
        },
    }
}

export default function Employees({ employees }) {
    return (
        <>
            <Head>
                <title>Zodinet | Employees</title>
            </Head>
            <div>
                <h1>All Employees</h1>
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