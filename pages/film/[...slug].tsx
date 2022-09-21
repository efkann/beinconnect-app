import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { getMovieBySlug } from '../../ utils/getMovieBySlug';

const Wrapper = styled.div`
  margin-top: 72px;
  margin-bottom: 64px;
`;
const ContentWrapper = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: auto 1fr auto;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 36px;
  }
`;

const Poster = styled(Image)`
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  border-radius: 8px;
`;

const Details = styled.div`
  margin: 0 36px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    margin: 0;
  }
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;

  @media (min-width: 800px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
const MadeYear = styled.span`
  margin-left: 8px;
  font-weight: initial;
  font-size: 1.25rem;
  color: #e0e0e0;
`;

const MetadataWrapper = styled.div`
  margin-top: 36px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Metadata = styled.span`
  color: #d0d0d0;
  font-size: 1.125rem;
`;

const MetadataValue = styled.span`
  font-weight: 600;
  margin-left: 8px;
  font-size: 1.125rem;
`;

const DescriptionWrapper = styled.div`
  margin-top: 36px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const WatchButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-size: 1.125rem;
  border: 0;
  color: inherit;
  padding: 12px 36px;
  background-color: #683799;
  border-radius: 8px;
  &:hover {
    background-color: #864cbf;
  }
`;

const TrailerButton = styled.button`
  cursor: pointer;
  margin-top: 16px;
  font-weight: 600;
  font-size: 1.125rem;
  border: 0;
  color: inherit;
  padding: 12px 36px;
  background-color: #242424;
  border-radius: 8px;
  &:hover {
    background-color: #323232;
  }
`;

export default function MoviePage() {
  const { query } = useRouter();
  const { slug } = query;
  if (typeof slug?.[0] !== 'string') throw new Error('Bir seyler ters gitti');
  const movieSlug = slug[0];
  const movie = getMovieBySlug(movieSlug);
  if (movie === undefined) throw new Error('Film bulunamadi.');

  return (
    <Wrapper>
      <Head>
        <title>{movie.title} - beIN CONNECT</title>
      </Head>
      <ContentWrapper>
        <Poster
          src={movie.imageUrl}
          width={220}
          height={286}
          alt={movie.title}
        />
        <Details>
          <FlexWrapper>
            <Title>{movie.title}</Title>
            <MadeYear>({movie.madeYear})</MadeYear>
          </FlexWrapper>
          <MetadataWrapper>
            <div>
              <Metadata>Tür</Metadata>
              <span>:</span>
              <MetadataValue>Korku</MetadataValue>
            </div>
            <div>
              <Metadata>Süre</Metadata>
              <span>:</span>
              <MetadataValue>{movie.duration}</MetadataValue>
            </div>
            <div>
              <Metadata>Oyuncular</Metadata>
              <span>:</span>
              <MetadataValue>
                Ana De La Reguera, Josh Lucas, Tenoch Huerta, Leven Rambin, Will
                Patton
              </MetadataValue>
            </div>
          </MetadataWrapper>
        </Details>
        <ButtonsWrapper>
          <WatchButton>İzle</WatchButton>
          <TrailerButton>Fragmanı İzle</TrailerButton>
        </ButtonsWrapper>
      </ContentWrapper>
      <DescriptionWrapper>
        <Description>{movie.description}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
}
