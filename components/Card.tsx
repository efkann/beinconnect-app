import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const SPACE_BETWEEN_CARDS = 16;

const Wrapper = styled.div`
  width: calc(calc(100% - calc(4 * ${SPACE_BETWEEN_CARDS}px)) / 5);
  &:not(:first-child) {
    margin-left: 16px;
  }
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 944px) {
    width: calc(calc(100% - calc(3 * ${SPACE_BETWEEN_CARDS}px)) / 4);
  }
  @media (max-width: 692px) {
    width: calc(calc(100% - calc(2 * ${SPACE_BETWEEN_CARDS}px)) / 3);
  }
  @media (max-width: 456px) {
    width: calc(calc(100% - calc(1 * ${SPACE_BETWEEN_CARDS}px)) / 2);
  }
`;

const StyledImage = styled(Image)`
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  border-radius: 8px;
  transition: transform 300ms;
`;

const HoverWrapper = styled.a`
  &:hover ${StyledImage}, &:focus {
    transform: scale(1.1);
  }
`;

interface CardProps {
  title: string;
  imageUrl: string;
  slug: string;
}
export default function Card({ imageUrl, title, slug }: CardProps) {
  return (
    <Wrapper>
      <Link href={slug} passHref>
        <HoverWrapper>
          <StyledImage src={imageUrl} width={220} height={286} alt={title} />
        </HoverWrapper>
      </Link>
    </Wrapper>
  );
}
