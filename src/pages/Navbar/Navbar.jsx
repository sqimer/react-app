import React from "react";
import { Wrap, StyledLink, Links } from "./navbar.style";

const Navbar = () => {
  const pages = [
    {
      title: "Главная",
      key: "1",
      path: "/home",
    },
    {
      title: "Новости",
      key: "2",
      path: "/news",
    },
    {
      title: "Погода",
      key: "3",
      path: "/weather",
    },
    {
      title: "Профиль",
      key: "4",
      path: "/profile",
    },
  ];

  const login = () => {
    localStorage.setItem("jwt-token", false);
  };

  return (
    <Wrap>
      <Links>
        {pages.map((item) => {
          return (
            <StyledLink
              to={item.path}
              key={item.key}
              activeStyle={{
                color: "#f64c72",
              }}
            >
              {item.title}
            </StyledLink>
          );
        })}
      </Links>
      <Links>
        {localStorage.getItem("jwt-token") === "true" ? (
          <StyledLink onClick={login} to="/login">
            Выйти
          </StyledLink>
        ) : (
          <StyledLink onClick={login} to="/login">
            Войти
          </StyledLink>
        )}
      </Links>
    </Wrap>
  );
};

export default Navbar;
