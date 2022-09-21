import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 32px;
`;

const CardsWrapper = styled.div`
  margin-top: 16px;
`;

interface CategoryProps {
  name: string;
  children: React.ReactNode;
}
export default function Category({ name, children }: CategoryProps) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <CardsWrapper>{children}</CardsWrapper>
    </Wrapper>
  );
}
