import React from 'react';
import styled from '@emotion/styled';

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
`;
