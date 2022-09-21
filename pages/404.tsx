import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const GoHomeLink = styled(Link)``;

export default function FourOhFour() {
  return (
    <Wrapper>
      <Title>Oops, maalesef aradığın sayfayı bulamadık</Title>
      <GoHomeLink href="/" passHref>
        <a>Ana sayfaya geri dön</a>
      </GoHomeLink>
    </Wrapper>
  );
}
