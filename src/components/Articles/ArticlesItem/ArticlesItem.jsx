import React from "react";
import {
  Title,
  Author,
  Content,
  Wrap,
  DatePublished,
} from "./articlesItem.style";

import { Card, Button } from "antd";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { addNews } from "../../../redux/action";

const ArticlesItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card
      style={{
        margin: "15px auto",
        border: "1px solid #000",
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <Author>{item.source.name}</Author>
      <Title>{item.title}</Title>
      <Content>{item.description}</Content>
      <Wrap>
        <Button onClick={() => dispatch(addNews(item))} type="primary">
          Добавить в закладки
        </Button>
        <DatePublished>
          {Moment(item.publishedAt).format("DD-MM-YYYY, HH:mm")}
        </DatePublished>
      </Wrap>
    </Card>
  );
};

export default ArticlesItem;
