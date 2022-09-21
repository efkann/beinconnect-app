import React, { useEffect, useRef } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import styled from 'styled-components';
import { categoriesType } from '../ utils/getCategories';
import Category from './Category';
import Card from './Card';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 72px;
  margin-bottom: 128px;
`;

const flickityOptions = {
  cellAlign: 'left',
  pageDots: false,
  groupCells: true,
  contain: true,
};

interface CategoriesProps {
  categories: categoriesType;
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <Wrapper>
      {categories.map((category) => (
        <Category key={category.id} name={category.name}>
          <Flickity options={flickityOptions} static={true}>
            {category.contents.map((content) => (
              <Card
                key={`${category.slug}/${content.slug}`}
                imageUrl={content.imageUrl}
                title={content.title}
                slug={content.slug}
              />
            ))}
          </Flickity>
        </Category>
      ))}
    </Wrapper>
  );
}
