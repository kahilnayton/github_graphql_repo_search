import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from '@material-ui/lab/ToggleButton';
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

export const H2 = styled.h1`
  font-size: 20px;
  color: ${(props) => (props.primary ? colors.grey900 : "white")};
  padding-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${(props) => (props.primary ? colors.grey700 : "white")};
  padding-bottom: 10px;
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 20px;
  padding-right: 20px !important;
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  inset: 0;
  min-height: 60%;
  min-width: 80%;
  background: ${colors.red};
  padding: 20px;
  text-align: left;

  width: 80vw;
  height: 300px;
  margin: auto;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    img {
      height: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;

  span {
    &::after {
      content: "";
      height: 2px;
      width: 20px;
      background-color: #fff;
    }
  }

  img {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  height: 100%;
  max-width: 120rem;
`;

export const ButtonContainer = styled(ToggleButtonGroup)`
  display: flex;
  position: relative;
  justify-content: space-between;

  button {
    margin-right: 10px;
    border: none;
  }

  h1 {
    position: absolute;
    white-space: nowrap;
    font-weight: normal;
    top: -20px;
    left: 0;
    color: ${colors.grey600};
  }
  
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledButton = styled(ToggleButton)`
  max-width: 20px;
`;