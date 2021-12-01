import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'


const Header = () => {

    const router = useRouter()
    // console.log(router)

    return (
        <div className="header">
            <nav>
                <ul>{
                    router.pathname === '/' ?
                        <li className="active">
                            <Link href='/'>Home</Link>
                        </li> : <li>
                            <Link href='/'>Home</Link>
                        </li>
                }
                    {
                        router.pathname === '/blog' ?
                            <li className="active">
                                <Link href='/blog'>Blog</Link>
                            </li> : <li>
                                <Link href='/blog'>Blog</Link>
                            </li>
                    }
                    {
                        router.pathname === '/profil' ?
                            <li className="active">
                                <Link href='/profil'>Profile</Link>
                            </li> : <li>
                                <Link href='/profil'>Profile</Link>
                            </li>
                    }
                    {
                        router.pathname === '/blog/items' ?
                            <li className="active">
                                <Link href='/blog/items'>Items</Link>
                            </li> : <li>
                                <Link href='/blog/items'>Items</Link>
                            </li>
                    }
                    {
                        router.pathname === '/blog/categories' ?
                            <li className="active">
                                <Link href='/blog/categories'>Categories</Link>
                            </li> : <li>
                                <Link href='/blog/categories'>Categories</Link>
                            </li>
                    }
                    {
                        router.pathname === '/departements' ?
                            <li className="active">
                                <Link href='/departements'>Départements</Link>
                            </li> : <li>
                                <Link href='/departements'>Départements</Link>
                            </li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header
