import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'


const Home: NextPage = ({articles}:any) => {
  console.log({articles})
  return (
  <div>
    <Head>
      <title>WebDev News</title>
      <meta name="keywords" content='web development and programming' /> 
    </Head>
    <h1>Welcome To NextJS</h1>

    <ArticleList articles={articles} />
  </div>
  )
}

export default Home;

export const getStaticProps = async ()=>{
  const res = await fetch('http://localhost:3000/api/articles')
  //console.log({res})
  const articles = await res.json()
  return{
    props:{
      articles 
    }
  }
}
