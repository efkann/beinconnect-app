import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 72px;
`;

const Note = styled.p`
  margin-top: 36px;
  color: #d0d0d0;
`;

export default function Account() {
  return (
    <Wrapper>
      <h2>Hesabım</h2>
      <Note>Nothing to see here yet...</Note>
    </Wrapper>
  );
}
