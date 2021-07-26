import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#2f2fa2, #242582);
`;

export const Title = styled.p`
  font-size: 2.25em;
  color: #fff;
  margin-bottom: 25px;
`;

export const Form = styled.div`
  width: 600px;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin: 15px 0;
  height: 58px;
  border: 0;
  outline: none;
  border-radius: 10px;
  width: 70%;
  z-index: 5;
  padding-left: 15px;
  color: #000;
  font-weight: 700;
  font-size: 1em;

  &::placeholder {
      font-size: 0.875em;
      color: #AEAEAE;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 70%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125em;
  color: #fff;
  background-color: #f64c72;
  font-weight: 700;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

export const Error = styled.span`
    width: 70%;
    text-align: left;
    color: #f64c72;
    font-size: 1em;
`;