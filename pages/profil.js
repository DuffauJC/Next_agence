import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import useSWR from 'swr'
import Head from 'next/head'

const Profil = () => {

    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)

    if (!data) {
        return <h1>Chargement ...</h1>
    }

    if (error) {
        return <h1>Une erreur est survenue ...</h1>
    }
    return (
        <>
            <Head>
                <title>Liste des utilisateurs</title>
            </Head>
            <Layout>
                {data && data.map((user, index) => (
                    <div className='blog' key={index}>
                        <h1>{user.name}</h1>
                        <p>email : {user.email}</p>
                        <p>tel : {user.phone}</p>
                    </div>
                ))}
            </Layout>
        </>

    )
}

export default Profil
