import React from "react";
import {
  Title,
  Author,
  Content,
  Wrap,
  DatePublished,
} from "./savedNewsItem.style";

import { Card } from "antd";
import Moment from "moment";

const ArticlesItem = ({ item }) => {
  return (
    <Card style={{ margin: "15px auto", border: "1px solid #000", padding: "15px", borderRadius: "4px" }}>
      <Author>{item.source.name}</Author>
      <Title>{item.title}</Title>
      <Content>{item.description}</Content>
      <Wrap>
        <DatePublished>
          {Moment(item.publishedAt).format("DD-MM-YYYY, HH:mm")}
        </DatePublished>
      </Wrap>
    </Card>
  );
};

export default ArticlesItem;
