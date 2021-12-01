import React, { useEffect } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Exemple = dynamic(() => import("../components/exemple").then(mod=>mod.Exemple), { ssr: false })

const Home = ({ data }) => {

  useEffect(() => {
    localStorage.setItem('token-agence', "def154fref2f")
  }, [])

  return (
    <>
      <Head>
        <title>Liste des régions</title>
      </Head>
      <Layout>
        <div className="container-fluid">
          <Exemple/>
          {data.map((region, index) => (
            <div className="home" key={index}>
              <Link href="/region/[code]" as={`/region/${region.code}`}>
                <h1 className="link"> {region.nom}  </h1>
              </Link>

              <p>{region.code}</p>
            </div>
          ))}
        </div>

      </Layout>
    </>

  )
}
export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.API_GEO}/regions`)
  return {
    props: {
      data
    }
  }
}

export default Home
