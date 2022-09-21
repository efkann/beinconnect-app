import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import beinLogo from '../public/bein-logo.svg';

const Wrapper = styled.header`
  background-color: #422063;
`;

const HeaderWrapper = styled.nav`
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    margin: 0 16px;
  }
`;

const MenuLink = styled.a`
  font-weight: 600;
  font-size: 1.125rem;
`;

const LinkWrapper = styled.a`
  line-height: 0;
`;

const NavList = styled.ul`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export default function Header() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Link href="/" passHref>
          <LinkWrapper>
            <Image src={beinLogo} alt="" />
          </LinkWrapper>
        </Link>
        <NavList>
          <li>
            <MenuLink href="/hesabim">Hesabım</MenuLink>
          </li>
        </NavList>
      </HeaderWrapper>
    </Wrapper>
  );
}
