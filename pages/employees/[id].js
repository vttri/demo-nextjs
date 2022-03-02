import Head from "next/head"
import React from "react"

export async function getStaticPaths() {
    const res = await fetch('https://6050632d534609001766fa26.mockapi.io/users')
    const employees = await res.json()
    const paths = employees.map((employee) => {
        return {
            params: { id: employee.id }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch('https://6050632d534609001766fa26.mockapi.io/users/' + id)
    const employee = await res.json()
    return {
        props: {
            employee,
        },
    }
}

export default function Employee({ employee }) {
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
        </>
    )
}