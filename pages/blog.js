import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'

const Blog = ({ posts }) => {

    return (
        <>
            <Head>
                <title>Liste des blogs</title>
            </Head>
             <Layout>
            {
                posts.map((post, index) => (
                    <div className="blog" key={post._id}>
                        <h1>{post.title}</h1>
                        <Link href='/blog/[id]' as={`/blog/${post._id}`}passHref>
                           <div>
                            <img src={post.pictures} />
                        </div>   
                        </Link>
                      
                        <div>{post.body}</div>
                    </div>
                ))
            }
        </Layout>  
            </>
     
    )

}
export const getStaticProps = async (context) => {
    const url = "https://aqueous-meadow-07678.herokuapp.com"
    const { data } = await axios.get(`${url}/api/posts`)
    const posts = data.data

    return {
        props: {
            posts
        }
    }
}

export default Blog
