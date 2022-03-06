import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 22px;
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: #ff6600;
  color: #ffffff;
  text-align: center;
  width: 180px;
  height: fit-content;
  border: 0;
  font-size: 18px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  :first-of-type {
    margin-right: 20px;
  }
  &:hover {
    background: #cc5200;
  }
`;