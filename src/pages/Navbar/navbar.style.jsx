import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2f2fa2;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 1.125em;
  padding: 5px 7px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

