import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px 40px;
`;

export const WeatherIcon = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const WeatherBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Temp = styled.div`
  font-size: 20px;
  color: red;
`;

export const Humidity = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const Pressure = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const Wind = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const Delete = styled.div`
  font-size: 16px;
`;