import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <ContentImageOne src="/images/cta-logo-one.svg" />
        <SignUpButton>Get All There</SignUpButton>
        <Description>
          Stream Disney+ Originals, latest series & blockbuster movies
        </Description>
        <ContentImageTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: "";
    position: absolute;
    background: url("/images/login-background.jpg") top center / cover no-repeat;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 80%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
`;

const ContentImageOne = styled.img``;

const SignUpButton = styled.a`
  color: #f9f9f9;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: white;
  margin-bottom: 16px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
`

const ContentImageTwo = styled(ContentImageOne)``;
