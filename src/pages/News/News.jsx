import React, { useEffect } from "react";
import { Wrap, Articles } from "./news.style";
import { useDispatch, useSelector } from "react-redux";
import { requestNews } from "../../redux/action";

import Navbar from "../Navbar/Navbar";
import ArticleList from "../../components/Articles/Articles";

const News = () => {
  const dispatch = useDispatch();
  const articlesList = useSelector((state) => state.newsReducer.news);
  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);

  return (
    <Wrap>
      <Navbar />
      <Articles>
        {articlesList.articles && (
          <ArticleList articles={articlesList.articles} />
        )}
      </Articles>
    </Wrap>
  );
};

export default News;
