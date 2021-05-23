import styled from "styled-components";
import { colors } from "./colors";

export const Wrapper = styled.div`
  display: block;
  height: 100%;
  width: 100%;
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