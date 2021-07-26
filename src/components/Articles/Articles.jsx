import React from "react";
import { Wrap } from "./articles.style";

import ArticlesItem from "./ArticlesItem/ArticlesItem";
import { Divider } from "antd";

const Articles = ({ articles }) => {
  return (
    <Wrap>
      <Divider orientation="left" plain>
        Новости
      </Divider>
      {articles.map((item, i) => {
        return <ArticlesItem key={i} item={item} />;
      })}
    </Wrap>
  );
};

export default Articles;
