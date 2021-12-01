import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'

import Head from 'next/head'

const Departement = ({data}) => {
    return (
        <>
             <Head>
                <title>Liste des départements</title>
            </Head>
              <Layout>
            {
                data.map((d, index) => (
                    <div className="blog" key={index}>
                        <h1>{d.nom}</h1>
                        <p>Code du département : {d.code}</p>
                        <p>Code de la région : {d.codeRegion}</p>
                    </div>
                ))
            }
        </Layout>
            </>

    )
}

Departement.getInitialProps = async (context) => {
    const url = "https://geo.api.gouv.fr/departements"
    const { data } = await axios.get(url)
    console.log(data)
    return {
        data
    }
}

export default Departement
