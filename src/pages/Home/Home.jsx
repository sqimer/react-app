import React from "react";
import { Wrap, HomeWrap, Title, Desc } from "./home.style";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <Wrap>
      <Navbar />
      <HomeWrap>
        <Title>Добро пожаловать!</Title>
        <Desc>
          Приветствуем тебя на нашем сайте, здесь ты можешь узнать все самые
          свежие новости и ознакомиться с прогнозом погоды в Вашем городе.
        </Desc>
      </HomeWrap>
    </Wrap>
  );
};

export default Home;
