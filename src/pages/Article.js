import React from 'react';
import ArticleContent from './ArticleContent';
import NotFound from './NotFound';
import ArticleListComponent from '../components/ArticleListComponent';

const Article = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);
  const filteredArticle = ArticleContent.filter(
    (article) => article.name !== name
  );
  console.log(article);
  return (
    <>
      {article ? (
        <div>
          <h1>Welcome to {article.name}</h1>
          {article.content.map((content, key) => (
            <p key={key}>{content}</p>
          ))}

          <h3>Other Articles</h3>
          <ArticleListComponent articles={filteredArticle} />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Article;
