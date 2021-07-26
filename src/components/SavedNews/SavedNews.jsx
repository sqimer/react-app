import React from "react";
import { Wrap } from "./savedNews.style";

import SavedNewsItem from "./SavedNewsItem/SavedNewsItem";
import { Divider } from "antd";

const Articles = ({ articles }) => {
  return (
    <Wrap>
      <Divider orientation="left" plain>
        Сохраненые новости
      </Divider>
      {articles.map((item, i) => {
        return <SavedNewsItem key={i} item={item} />;
      })}
    </Wrap>
  );
};

export default Articles;
