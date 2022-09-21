import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle }; // Workaround for formatting, see: https://github.com/prettier/prettier/issues/11196

const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    background-color: #0d0f12;
    color: #f0f0f0;
  }

  #__next {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  // 3rd party styles

  .flickity-page-dots .dot {
    border: 1px solid #a0a0a0;
  }
  .flickity-button {
    background-color: #181818 !important;
    color: #f0f0f0 !important;
  }
  .flickity-prev-next-button:disabled {
    visibility: hidden;
  }
  @media (hover: none) {
    .flickity-prev-next-button {
      visibility: hidden;
    }
  }
`;

export default GlobalStyle;
