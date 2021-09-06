import React, { useState } from 'react';
import ArticleListComponent from '../components/ArticleListComponent';
import ArticleContent from './ArticleContent';

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleListComponent articles={ArticleContent} />
    </>
  );
};

export default ArticlesList;
