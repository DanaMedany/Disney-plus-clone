import React from "react";
import styled from "styled-components";

function DetailPage() {
  return (
    <Container>
      This is Details
    </Container>);
}

export default DetailPage;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  color: white;
`;
