import styled from "styled-components";
import { colors } from "./colors";

export const Wrapper = styled.div`
  display: block;
  height: 100%;
  width: 100%;
`;


export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


export const Card = styled.div`
  text-align: left;
  padding: 10px;
  transition: 0.2s;
  position: relative;
  &:hover {
    transition: 0.2s;
    cursor: pointer;
    box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.05);
  }

  p {
    padding-bottom: 5px;
  }

  img {
    opacity: 0;
    position: absolute;
    height: 30px;
    top: 5px;
    right: 5px;
    transition: 0.2s;
  }
  &:hover {
    img {
      transition: 0.2s;
      opacity: 1;
    }
  }
`;

export const Topics = styled.span`
  p {
    font-size: 12px;
    color: ${colors.blue};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.blue};
  height: 80px;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  font-size: 32px;
  color: ${(props) => (props.primary ? colors.grey900 : "white")};
  padding-bottom: 15px;
`;
