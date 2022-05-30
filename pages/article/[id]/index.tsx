import { useRouter } from "next/router";
import Link from "next/link";

const article = ({article}:any) =>{
  //const router = useRouter();
  //const {id} = router.query
  console.log('abcd ',article.id)
  console.log('abcd')
  return (
    <div>
      <h1>This is article {article.id} </h1>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <Link href="/"> Go Back </Link>
    </div>
  )
}


// export const getServerSideProps = async (context:any)=>{
 
//   //const res:any = await fetch(
//   //  `https://jsonplaceholder.typicode.com/posts/1`)
//   //
//   //console.log('i m here ', await res.json())
//   const article =
//     {
//       "userId": context.params.id,
//       "id": context.params.id,
//       "title": "sunt aut facere repellat provident ",
//       "body": "quia et suscipit"
//     }

//   return {
//     props:{
//       article
//     }
//   }
// }

export const getStaticProps = async (context:any)=>{
 
  const res = await fetch(
    `http://localhost:3000/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props:{
      article
    }
  }
}

export const getStaticPaths = async () =>{
  const res = await fetch('http://localhost:3000/api/articles')
  //console.log({res})
  const articles:any = await res.json()

  const ids = articles.map((article:any)=>article.id)
  const paths = ids.map((id:any) => ({params: {id:id.toString()}})) 
  //const paths = {params :{id:"1", id:"2"}}

  return{
    paths,
    fallback : false
  }
}



export default article;









































