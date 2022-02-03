import React from "react";
import styled from "styled-components";
import headLogo from "../images/logo.svg";
import loginImage from "../images/sign.svg";

const HeaderTag = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
heigth: 80px;
padding: 20px 30px;
background: #299B01;
`;

const H1 = styled.h1`
  font-sixe: 24px;
  line-heigth: 42px;
  color: #ffffff;
`;
const ButtonLogin = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  span{
    font-size: 16px;
    line-heigth: 19px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  img{margin-right: 15px;}
`; 

export default function Header() {
    return (
        <HeaderTag>
            <Wrapper className="wrapper">
                <img src={headLogo} alt="MrDonald's"></img>
                <H1>MrDonald's</H1>
            </Wrapper>
            <ButtonLogin>
            <img src={loginImage} alt="login Image"></img>
            <span>Войти</span>
            </ButtonLogin>
        </HeaderTag>
    );
}