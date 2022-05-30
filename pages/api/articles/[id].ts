import { articles } from "../data";


export default function handler({query: {id}}:any, res:any){
  const filtered = articles.filter((article:any)=>
    article.id == id
  )
  if(filtered.length > 0){
    res.status(200).json(filtered[0]);
  }
  else{
    res.status(500).json({'m':'id not found'});
  }
     
}