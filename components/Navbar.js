import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div>
                <Link href="/about">
                    <a>All Users CSR</a>
                </Link>
                <Link href="/users">
                    <a>All Users SSR</a>
                </Link>
                <Link href="/employees">
                    <a>All Employees</a>
                </Link>
            </div>
        </nav>

    )
}