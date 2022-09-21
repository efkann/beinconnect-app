import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Wrapper = styled.main`
  width: min(1080px, calc(100% - 32px));
  margin: 0 auto;
`;

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
