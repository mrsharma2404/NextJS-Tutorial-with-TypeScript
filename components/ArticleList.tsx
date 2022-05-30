import React from "react";
import articleStyles from '../styles/Article.module.css';
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }: any) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: any) => (
        <div>
          <ArticleItem article={article} />
        </div>
      )
      )}
    </div>
  )
}

export default ArticleList;